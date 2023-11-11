import InProgressCard from "./in_progress_card.jsx";

const InProgressCardsList = () => {
  return <div className={`flex-grow-1 d-flex flex-column`}
    style={{
      gap: '20px',
      paddingBottom: '30px',
    }}
  >
    <InProgressCard
      entryFor={'Discord'}
      progress={0.5}
      title={'My age impacts my opportunities to work in tech'}
      subtitle={'Lorem ipsum dolor sit amet consectetur. Congue urna molestie diam a dignissim ut. Consequat quis blandit condimentum non nibh. Mi velit urna nulla pretium sit platea tellus cursus est....'}
    />

    <InProgressCard
      entryFor={'Interview'}
      progress={0.7}
      title={'Different title to the one above'}
      subtitle={'Lorem ipsum dolor sit amet consectetur. Congue urna molestie diam a dignissim ut. Consequat quis blandit condimentum non nibh. Mi velit urna nulla pretium sit platea tellus cursus est....'}
      tags={['Ageism', 'Discrimination']}
    />
  </div>
}

export default InProgressCardsList;
