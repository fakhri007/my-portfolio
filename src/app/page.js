import Navbar from './navbar';
import Image from 'next/image';
import data from './data.json';
import AboutPage from './aboutPage';
import ContactPage from './contactPage';
import ExperiencePage from './experiencePage';
import EducationPage from './educationPage';
import SkillPage from './skillPage';


export default function Home() {
  return (
    <div className="min-h-screen min-w-full bg-gradient-to-t from-gray-700 to-gray-950">
      <Navbar />
      <AboutPage name={data.aboutPage.name} about={data.aboutPage.about} />

      
      <div className="min-h-[120vh] min-w-full bg-gray-950">
        <div className="flex flex-col items-center pt-16 h-[35vh]">
          <a href="#contact" className="bg-transparent  hover:bg-gray-500 text-gray-800 font-bold hover:text-gray-950 py-2 px-4 border border-gray-700 hover:border-transparent rounded" >
            READ MORE
          </a>
        </div>
      <ContactPage github={data.contactPage.github} mail={data.contactPage.mail} linkedin={data.contactPage.linkedin} instagram={data.contactPage.instagram} />
      </div>
      <ExperiencePage experiencePage={data.experiencePage}/>

      <EducationPage educationPage={data.educationPage}/>

      <SkillPage skillPage={data.skillPage}/>
    </div>

  )
}
