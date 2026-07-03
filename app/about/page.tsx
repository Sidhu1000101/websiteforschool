import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { GraduationCap, Users, Award, BookOpen, Clock, Heart } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      title: 'Excellence',
      description: 'Striving for academic and personal excellence in all aspects of education.',
      icon: Award,
    },
    {
      title: 'Integrity',
      description: 'Building character through honesty, ethics, and moral values.',
      icon: Heart,
    },
    {
      title: 'Innovation',
      description: 'Embracing modern teaching methods and technology for better learning.',
      icon: BookOpen,
    },
    {
      title: 'Community',
      description: 'Fostering a sense of belonging and responsibility towards society.',
      icon: Users,
    },
  ];

  const quickFacts = [
    { label: 'Established', value: '1990' },
    { label: 'Affiliation', value: 'State Board' },
    { label: 'Classes', value: '6th - 10th' },
    { label: 'Medium', value: 'Telugu & English' },
    { label: 'Staff', value: '25 Teachers' },
    { label: 'Students', value: '500+' },
  ];

  return (
    <main>
      <Hero
        title="About Our School"
        subtitle="Learn More About ZPHS CHINAGANJAM"
        description="Discover our history, values, and commitment to providing quality education."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* History */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Our History"
            subtitle="A legacy of educational excellence spanning over three decades."
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 card-shadow">
              <p className="text-gray-700 leading-relaxed mb-6">
                Zilla Parishad High School Chinaganjam was established in 1990 with the vision of providing quality education to the rural population of Chinaganjam and surrounding villages in Bapatla District, Andhra Pradesh.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Over the years, the school has grown from a small institution with limited resources to a well-equipped school serving over 500 students. Our commitment to academic excellence and holistic development has made us one of the preferred government schools in the region.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue to uphold our founding principles while adapting to modern educational practices, ensuring that our students are well-prepared for the challenges of the 21st century.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 card-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <GraduationCap size={32} className="text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a leading educational institution that provides accessible, quality education to all students, empowering them to become confident, responsible, and successful individuals who contribute positively to society. We envision a future where every child has the opportunity to excel regardless of their background.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 card-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen size={32} className="text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide holistic education through innovative teaching methods, modern facilities, and a nurturing environment that develops academic excellence, character building, and life skills in every student. We are committed to creating a learning ecosystem that fosters curiosity, creativity, and critical thinking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide our educational philosophy."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                title={value.title}
                description={value.description}
                icon={value.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* School Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="School Information"
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {quickFacts.map((fact, index) => (
                <div key={index} className="bg-white rounded-xl p-6 card-shadow text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">{fact.value}</div>
                  <div className="text-gray-600">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Affiliation */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Affiliation & Recognition"
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 card-shadow">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">State Board Affiliation</h4>
                    <p className="text-gray-600">Affiliated to the Board of Secondary Education, Andhra Pradesh, following the state curriculum and examination pattern.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Government Recognition</h4>
                    <p className="text-gray-600">Recognized by the Department of School Education, Government of Andhra Pradesh as a Zilla Parishad High School.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Medium of Instruction</h4>
                    <p className="text-gray-600">Offering education in both Telugu and English medium to cater to the diverse needs of our students.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Timings */}
      <section className="section-padding bg-gray-50">
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
              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-primary-700">
                  <strong>Note:</strong> School timings may vary during examinations and special events. Parents will be notified of any changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Corner */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Student Corner"
            subtitle="Resources and information for our students."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              title="Academic Resources"
              description="Access study materials, previous question papers, and learning resources."
            />
            <Card
              title="Examination Schedule"
              description="Stay updated with exam dates, timetables, and important instructions."
            />
            <Card
              title="Co-curricular Activities"
              description="Information about sports, cultural activities, and competitions."
            />
          </div>
        </div>
      </section>

      {/* Parent Corner */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Parent Corner"
            subtitle="Information and resources for parents."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              title="Parent-Teacher Meetings"
              description="Schedule and guidelines for parent-teacher interactions."
            />
            <Card
              title="Attendance Information"
              description="Track your child's attendance and academic progress."
            />
            <Card
              title="School Policies"
              description="Guidelines on uniforms, discipline, and school rules."
            />
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Downloads"
            subtitle="Important forms and documents."
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 card-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Admission Form</h4>
                    <p className="text-sm text-gray-600">Application form for new admissions</p>
                  </div>
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    Download
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Student Handbook</h4>
                    <p className="text-sm text-gray-600">Rules and regulations for students</p>
                  </div>
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    Download
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">Academic Calendar</h4>
                    <p className="text-sm text-gray-600">Important dates and holidays for the academic year</p>
                  </div>
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
