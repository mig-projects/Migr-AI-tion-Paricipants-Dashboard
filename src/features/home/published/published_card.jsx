import SlideInCard from "../components/slide_in_card.jsx";
import {
  Card, Chip, ClickAwayListener, Grow, IconButton, Link, MenuItem, MenuList, Paper, Popper,
  Typography
} from "@mui/material";
import PropTypes from "prop-types";
import {DeleteOutlined, EditOutlined, Info, MoreVert, Warning} from "@mui/icons-material";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {deleteExperience, updateExperiencePublished} from "../../supabase/database/experience.js";
import {toast} from "react-toastify";
import CustomDialog from "../../../components/dialogs/custom_dialog.jsx";
import {AppRoutes} from "../../../App.jsx";
import variables from "../../../variables.module.scss";

const PublishedCard = ({
  showBiasExplorerText = false,
  experience,
  refreshFunction,
}) => {
  const navigate = useNavigate();

  const iconButtonStyle = {
    border: '1px solid #E7E7E7',
    borderRadius: '8px',
    boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.02)'
  };

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpenPopup((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpenPopup(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(openPopup);
  useEffect(() => {
    if (prevOpen.current === true && openPopup === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = openPopup;
  }, [openPopup]);

  return <SlideInCard>
    <div className={`d-flex flex-column gap-2`}>
      {
        showBiasExplorerText && <Typography className={`fw-medium`}
        >
          Published cards contribute to our data sets! {
            <Link className={`text-black link-underline-dark`}
              href={''}
              onClick={() => {
                toast.info('Coming soon!');
              }}
            >
              View Bias Analysis
            </Link>
          }
        </Typography>
      }

      <div className={`d-flex gap-4 align-items-start`}
        style={{
          padding: '30px 10px',
        }}
      >
        <Card
          elevation={0}
          className={`d-flex flex-column gap-4 flex-grow-1`}
          sx={{
            padding: '20px 30px',
            background: 'linear-gradient(300deg, #AC88EE -0.17%, rgba(255, 255, 255, 0.00) 162.25%)',
          }}
        >
          <Typography className={`fw-bold fs-2`}>
            {`"${experience.headline}"`}
          </Typography>

          <div className={`d-flex flex-column gap-2`}>
            <div className={`d-flex flex-wrap gap-2`}>
              {
                experience.categories_list.map((tag, index) => {
                  return <Chip
                    key={index}
                    className={`fw-medium`}
                    label={tag}
                    variant={`outlined`}
                    sx={{
                      backgroundColor: '#e5e5e5',
                      borderRadius: '8px',
                    }}
                  />
                })
              }
            </div>

            <div className={`d-flex flex-wrap gap-2`}>
              {
                experience.tags_list.map((tag, index) => {
                  return <Chip
                    key={index}
                    className={`fw-medium`}
                    label={tag}
                    variant={`outlined`}
                    sx={{
                      backgroundColor: '#e5e5e5',
                      borderRadius: '8px',
                    }}
                  />
                })
              }
            </div>
          </div>

          {
            !experience.hide_text && <Typography>
              {experience.text}
            </Typography>
          }
        </Card>

        <div>
          <IconButton
            sx={iconButtonStyle}
            onClick={handleToggle}
            ref={anchorRef}
            id="composition-button"
            aria-controls={openPopup ? 'composition-menu' : undefined}
            aria-expanded={openPopup ? 'true' : undefined}
            aria-haspopup="true"
          >
            <MoreVert />
          </IconButton>

          <Popper
            open={openPopup}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={openPopup}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      className={`pb-3`}
                    >
                      <Typography
                        style={{
                          padding: '20px 30px',
                        }}
                      >
                        Before deciding to edit remember that, it is<br/>
                        <span className={`fw-semibold`}>cost and energy expensive to process data.</span>
                      </Typography>
                      <div
                        className={`d-flex flex-column gap-2`}
                      >
                        <MenuItem onClick={(e) => {
                          setOpenEditDialog(true);
                          handleClose(e);
                        }}
                          style={{
                            padding: '10px 30px',
                          }}
                        >
                          Edit {<EditOutlined
                                fontSize={`small`}
                                style={{
                                  color: '#ADADAD',
                                  marginLeft: '10px',
                                }} />
                        }
                        </MenuItem>
                        <MenuItem
                          style={{
                            padding: '10px 30px',
                          }}
                          onClick={(e) => {
                            setOpenDeleteDialog(true);
                            handleClose(e);
                          }}
                        >
                          Delete {<DeleteOutlined
                                  fontSize={`small`}
                                  style={{
                                    color: '#ADADAD',
                                    marginLeft: '5px',
                                  }}/>
                          }
                        </MenuItem>
                      </div>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>

      </div>

    </div>

    <CustomDialog
      title={<div className={`d-flex gap-3`}>
        <Info sx={{
          color: variables.backgroundPurple,
        }}/>
        <Typography className={`fw-bold`}>
          Are you sure?
        </Typography>
      </div>}
      description={'This will move the entry back to the In Progress section. You can edit and publish it again.'}
      open={openEditDialog}
      handleClose={() => {
        setOpenEditDialog(false);
      }}
      onAgree={async () => {
        const {error} = await updateExperiencePublished({
          experienceID: experience.id,
          published: false,
        });

        if (error) {
          toast.error(error.message);
        }

        toast.success('Entry moved to In progress', {
          autoClose: 1000,
        });
        navigate(AppRoutes.DESCRIBE_YOUR_EXPERIENCE, { state: { experience: experience } });
        refreshFunction();
      }}
    />

    <CustomDialog
      title={<div className={`d-flex gap-3`}>
        <Warning sx={{
          color: 'red',
        }}/>
        <Typography className={`fw-bold`}>
          Delete Entry
        </Typography>
      </div>}
      description={'Are you sure you want to delete this entry?'}
      open={openDeleteDialog}
      handleClose={() => {
        setOpenDeleteDialog(false);
      }}
      onAgree={async () => {
        const {error} = await deleteExperience({
          experienceID: experience.id,
        });

        if (error) {
          toast.error(error.message);
        }

        toast.success('Entry deleted successfully.', {
          autoClose: 1000,
        });
        refreshFunction();
      }}
    />
  </SlideInCard>
}

PublishedCard.propTypes = {
  showBiasExplorerText: PropTypes.bool,
  experience: PropTypes.object,
  refreshFunction: PropTypes.func,
};

export default PublishedCard;
