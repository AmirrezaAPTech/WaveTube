import { topicList } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faMusic, faPodcast, faGamepad, faDumbbell, faGraduationCap, faVest, faUtensils, faDog, faPersonRunning, faCar, faGlobe, faFlask } from '@fortawesome/free-solid-svg-icons';

library.add(faHouse, faMusic, faPodcast, faGamepad, faDumbbell, faGraduationCap, faVest, faUtensils, faDog, faPersonRunning, faCar, faGlobe, faFlask);



const Sidebar = ({activeTopic, setActiveTopic}) => {

  function activeTopicHandler(topic) {
    setActiveTopic(topic)
  }

  activeTopic.length === 0 && setActiveTopic("Home")
  
  return (
    <section className='max-[640px]:flex max-[640px]:justify-start max-[640px]:items-start max-[640px]:overflow-auto max-[640px]:gap-4 pl-6 pr-10 scrollbar-none'>
      {topicList.map((topic) => (
        <div key={topic.name} className={`flex max-sm:flex-col max-sm:justify-center max-sm:text-center items-center text-gray-200 text-lg mt-10  max-[640px]:gap-2 cursor-pointer py-2 sm:rounded-3xl max-sm:rounded-xl max-sm:p-2 hover:bg-red-600 ${activeTopic === topic.name ? 'bg-red-600' : ''}`} onClick={() => activeTopicHandler(topic.name)}>
          <FontAwesomeIcon icon={['fas', topic.icon]} className='pr-6 pl-3 bg-transparent '/>
          {topic.name}
        </div>
      ))}
    </section>
  );
};

export default Sidebar;