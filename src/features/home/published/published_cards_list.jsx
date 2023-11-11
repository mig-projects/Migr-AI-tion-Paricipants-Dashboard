import PublishedCard from "./published_card.jsx";

const PublishedCardsList = () => {
  return <div className={`flex-grow-1 d-flex flex-column h-100`}
              style={{
                gap: '20px',
                paddingBottom: '30px',
              }}
  >
    <PublishedCard
      showBiasExplorerText={true}
      title={'My age impacts my opportunities to work in tech'}
      tags={['Ageism', 'Discrimination']}
      subtitle={'Lorem ipsum dolor sit amet consectetur. Congue urna molestie diam a dignissim ut. Consequat quis blandit condimentum non nibh. Mi velit urna nulla pretium sit platea tellus cursus est....'}
    />

    <PublishedCard
      title={'Different title to the one above'}
      subtitle={'Lorem ipsum dolor sit amet consectetur. Congue urna molestie diam a dignissim ut. Consequat quis blandit condimentum non nibh. Mi velit urna nulla pretium sit platea tellus cursus est....'}
      tags={['Ageism', 'Discrimination']}
    />
  </div>
}

export default PublishedCardsList;
