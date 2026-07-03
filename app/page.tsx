import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import Gallery from '@/components/Gallery';
import { GraduationCap, Users, Award, BookOpen, Clock, TrendingUp } from 'lucide-react';

export default function Home() {
  const highlights = [
    {
      title: 'Quality Education',
      description: 'Providing excellent education with experienced and dedicated teaching staff.',
      icon: GraduationCap,
    },
    {
      title: 'Modern Facilities',
      description: 'Well-equipped classrooms, science labs, computer lab, and library.',
      icon: BookOpen,
    },
    {
      title: 'Experienced Staff',
      description: 'Qualified teachers committed to student development and success.',
      icon: Users,
    },
    {
      title: 'Achievements',
      description: 'Consistent academic excellence and co-curricular achievements.',
      icon: Award,
    },
  ];

  const statistics = [
    { label: 'Students', value: '500+', icon: Users },
    { label: 'Teachers', value: '25+', icon: GraduationCap },
    { label: 'Years of Excellence', value: '30+', icon: Award },
    { label: 'Pass Percentage', value: '95%', icon: TrendingUp },
  ];

  const facilities = [
    { title: 'Smart Classrooms', description: 'Digital learning with modern teaching aids.' },
    { title: 'Science Lab', description: 'Well-equipped laboratory for practical learning.' },
    { title: 'Computer Lab', description: 'Computer education with modern systems.' },
    { title: 'Library', description: 'Extensive collection of books and resources.' },
  ];

  const announcements = [
    { title: 'Admissions Open 2024-25', description: 'Admissions are open for the academic year 2024-25. Contact school office for details.', badge: 'New' },
    { title: 'Summer Vacation', description: 'Summer vacation from May 1st to June 10th. School reopens on June 11th.', badge: 'Notice' },
    { title: 'Parent Meeting', description: 'Parent-teacher meeting scheduled for April 25th at 10:00 AM.', badge: 'Important' },
  ];

  const galleryImages = Array.from({ length: 6 }, (_, i) => `/gallery-${i + 1}.jpg`);

  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Welcome to ZPHS CHINAGANJAM"
        subtitle="Empowering Students Through Quality Education"
        description="A government school dedicated to providing excellent education and holistic development to students in Chinaganjam, Bapatla District."
        buttonText="Explore Our School"
        buttonLink="/about"
      />

      {/* School Introduction */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="About Our School"
            subtitle="Zilla Parishad High School Chinaganjam has been serving the community for over 30 years with commitment to excellence in education."
            centered
          />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              ZPHS Chinaganjam is a government school located in Bapatla District, Andhra Pradesh. We are committed to providing quality education to students from diverse backgrounds, ensuring their overall development and preparing them for a bright future.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our school follows the state curriculum while incorporating modern teaching methodologies to enhance learning outcomes. We believe in nurturing young minds with values, knowledge, and skills.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose Our School"
            subtitle="We provide a nurturing environment for academic and personal growth."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <stat.icon size={32} />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Principal's Message"
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 card-shadow">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={48} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">From the Principal's Desk</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Welcome to ZPHS Chinaganjam. Our school is dedicated to providing quality education that empowers students to become responsible citizens and lifelong learners. We focus on academic excellence while nurturing values and life skills.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our committed team of teachers works tirelessly to ensure that every student reaches their full potential. We invite parents to join us in this journey of education and transformation.
                  </p>
                  <p className="text-primary-600 font-semibold mt-4">- Principal, ZPHS Chinaganjam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a leading educational institution that provides accessible, quality education to all students, empowering them to become confident, responsible, and successful individuals who contribute positively to society.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 card-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide holistic education through innovative teaching methods, modern facilities, and a nurturing environment that develops academic excellence, character building, and life skills in every student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Facilities"
            subtitle="Modern infrastructure to support effective learning."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                title={facility.title}
                description={facility.description}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/facilities"
              className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700"
            >
              <span>View All Facilities</span>
            </a>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Latest Announcements"
            subtitle="Stay updated with school news and important notices."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {announcements.map((announcement, index) => (
              <Card
                key={index}
                title={announcement.title}
                description={announcement.description}
                badge={announcement.badge}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/announcements"
              className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700"
            >
              <span>View All Announcements</span>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="School Gallery"
            subtitle="Glimpses of our school life and activities."
            centered
          />
          <Gallery images={galleryImages} columns={3} />
          <div className="text-center mt-8">
            <a
              href="/gallery"
              className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700"
            >
              <span>View Full Gallery</span>
            </a>
          </div>
        </div>
      </section>

      {/* School Timings */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="School Timings"
            centered
          />
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-8 card-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Clock className="text-primary-600" size={24} />
                    <span className="font-medium">Morning Session</span>
                  </div>
                  <span className="text-gray-600">9:00 AM - 12:30 PM</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Clock className="text-primary-600" size={24} />
                    <span className="font-medium">Lunch Break</span>
                  </div>
                  <span className="text-gray-600">12:30 PM - 1:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="text-primary-600" size={24} />
                    <span className="font-medium">Afternoon Session</span>
                  </div>
                  <span className="text-gray-600">1:00 PM - 4:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our School Community</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Be part of our journey in shaping the future of our students. Contact us to learn more about admissions and programs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
          >
            <span>Contact Us Today</span>
          </a>
        </div>
      </section>
    </main>
  );
}
