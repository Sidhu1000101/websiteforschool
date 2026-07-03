import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { Monitor, FlaskConical, Library, Utensils, Droplets, Wifi, Trees, GraduationCap } from 'lucide-react';

export default function FacilitiesPage() {
  const facilities = [
    {
      title: 'Smart Classrooms',
      description: 'Digital learning with projectors, smart boards, and modern teaching aids to enhance the learning experience.',
      icon: Monitor,
    },
    {
      title: 'Science Lab',
      description: 'Well-equipped physics, chemistry, and biology laboratories for practical learning and experiments.',
      icon: FlaskConical,
    },
    {
      title: 'Computer Lab',
      description: 'Modern computer systems with internet access for computer education and digital literacy.',
      icon: Monitor,
    },
    {
      title: 'Library',
      description: 'Extensive collection of books, reference materials, and reading resources for all subjects.',
      icon: Library,
    },
    {
      title: 'Playground',
      description: 'Spacious playground for sports and physical activities including cricket, volleyball, and athletics.',
      icon: Trees,
    },
    {
      title: 'Drinking Water',
      description: 'Clean and safe drinking water facilities available throughout the school campus.',
      icon: Droplets,
    },
    {
      title: 'Mid-Day Meal',
      description: 'Nutritious mid-day meal program providing healthy food to all students.',
      icon: Utensils,
    },
    {
      title: 'Digital Learning',
      description: 'Access to digital content, educational videos, and online learning resources.',
      icon: Wifi,
    },
  ];

  return (
    <main>
      <Hero
        title="Our Facilities"
        subtitle="Modern Infrastructure for Quality Education"
        description="Explore the excellent facilities we provide to support the holistic development of our students."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Facilities Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Campus Facilities"
            subtitle="State-of-the-art infrastructure to support learning and development."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                title={facility.title}
                description={facility.description}
                icon={facility.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Academic Facilities"
            subtitle="Resources to support academic excellence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 card-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Monitor size={32} className="text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Classrooms</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our classrooms are equipped with modern teaching aids including projectors, smart boards, and audio-visual systems. This technology-enabled learning environment helps students grasp complex concepts better and makes learning more interactive and engaging.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Digital projectors in every classroom</li>
                <li>• Interactive smart boards</li>
                <li>• Audio-visual learning materials</li>
                <li>• High-speed internet connectivity</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 card-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <FlaskConical size={32} className="text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Science Laboratories</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We have well-equipped separate laboratories for Physics, Chemistry, and Biology. Students get hands-on experience with experiments under the guidance of qualified teachers, helping them understand scientific concepts practically.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Physics lab with modern equipment</li>
                <li>• Chemistry lab with safety measures</li>
                <li>• Biology lab with specimens and microscopes</li>
                <li>• Experienced lab assistants</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 card-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Monitor size={32} className="text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Computer Lab</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our computer lab is equipped with modern systems and high-speed internet. Students learn computer fundamentals, programming, and digital literacy skills that are essential in today's world.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Modern computer systems</li>
                <li>• High-speed internet access</li>
                <li>• Computer education from basic to advanced</li>
                <li>• Programming and coding classes</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 card-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Library size={32} className="text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Library</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our school library houses a vast collection of books including textbooks, reference books, fiction, non-fiction, and educational magazines. Students are encouraged to develop reading habits and use the library for research and self-study.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Wide range of books and magazines</li>
                <li>• Quiet reading environment</li>
                <li>• Reference materials for all subjects</li>
                <li>• Digital library resources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Student Welfare */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Student Welfare Facilities"
            subtitle="Ensuring the well-being of our students."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 card-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Utensils size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mid-Day Meal</h3>
              <p className="text-gray-700 leading-relaxed">
                We provide nutritious mid-day meals to all students under the government's Mid-Day Meal Scheme. The meals are prepared hygienically and ensure proper nutrition for growing children.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 card-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Droplets size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Drinking Water</h3>
              <p className="text-gray-700 leading-relaxed">
                Clean and safe drinking water is available throughout the campus. We have water purifiers installed to ensure that students have access to safe drinking water at all times.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 card-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <Trees size={32} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Playground</h3>
              <p className="text-gray-700 leading-relaxed">
                Our spacious playground provides ample space for sports and physical activities. We encourage students to participate in various sports to maintain physical fitness and develop team spirit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Learning */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Digital Learning Initiatives"
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 card-shadow">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wifi className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Technology-Enabled Learning</h3>
                  <p className="text-gray-700">
                    We embrace technology to enhance the learning experience. Our digital learning initiatives include access to online educational content, video lectures, and interactive learning platforms that supplement classroom teaching.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Digital Content</h4>
                  <p className="text-sm text-gray-600">Access to digital textbooks and learning materials</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Video Lectures</h4>
                  <p className="text-sm text-gray-600">Educational videos for better understanding</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Online Assessments</h4>
                  <p className="text-sm text-gray-600">Digital tests and quizzes for practice</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Internet Access</h4>
                  <p className="text-sm text-gray-600">High-speed internet for research and learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Future Development Plans"
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Facilities</h3>
              <p className="text-gray-700 mb-6">
                We are continuously working to improve our facilities. Some of our upcoming development plans include:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-3">
                  <GraduationCap className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span>Additional smart classrooms with advanced technology</span>
                </li>
                <li className="flex items-start space-x-3">
                  <GraduationCap className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span>Expanded library with more digital resources</span>
                </li>
                <li className="flex items-start space-x-3">
                  <GraduationCap className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span>Indoor sports complex for year-round activities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <GraduationCap className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span>Science park for hands-on learning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <GraduationCap className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span>Language lab for improving communication skills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
