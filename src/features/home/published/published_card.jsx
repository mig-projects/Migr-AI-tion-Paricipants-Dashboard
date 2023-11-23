import SlideInCard from "../components/slide_in_card.jsx";
import {
  Card, Chip, ClickAwayListener, Grow, IconButton, Link, MenuItem, MenuList, Paper, Popper,
  Typography
} from "@mui/material";
import PropTypes from "prop-types";
import {DeleteOutlined, EditOutlined, MoreVert, Warning} from "@mui/icons-material";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {deleteExperience} from "../../supabase/database/experience.js";
import {toast} from "react-toastify";
import CustomDialog from "../../../components/dialogs/custom_dialog.jsx";

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

  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return <SlideInCard>
    <div className={`d-flex flex-column gap-2`}>
      {
        showBiasExplorerText && <Typography className={`fw-medium`}
        >
          Published cards contribute to our data sets! {
            <Link className={`text-black link-underline-dark`}
              href={''}
            >
              View Bias Explorer
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
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
          >
            <MoreVert />
          </IconButton>

          <Popper
            open={open}
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
                      autoFocusItem={open}
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
                          navigate('/describe_your_experience', { state: { withoutSignup: true } });
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
                          onClick={() => {
                            setOpenDialog(true);
                            handleClose();
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
        <Warning sx={{
          color: 'red',
        }}/>
        <Typography className={`fw-bold`}>
          Delete Entry
        </Typography>
      </div>}
      description={'Are you sure?'}
      open={openDialog}
      handleClose={() => {
        setOpenDialog(false);
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
      open={openDialog}
      handleClose={() => {
        setOpenDialog(false);
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
