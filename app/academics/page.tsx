import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';
import { BookOpen, Calendar, Award, Users } from 'lucide-react';

export default function AcademicsPage() {
  const classesOffered = [
    { class: 'Class 6', sections: 'A, B', students: '120' },
    { class: 'Class 7', sections: 'A, B', students: '115' },
    { class: 'Class 8', sections: 'A, B', students: '110' },
    { class: 'Class 9', sections: 'A, B', students: '105' },
    { class: 'Class 10', sections: 'A, B', students: '100' },
  ];

  const subjects = [
    'Telugu', 'Hindi', 'English', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Physical Education'
  ];

  const achievements = [
    {
      title: '95% Pass Percentage',
      description: 'Consistently maintaining high pass percentage in board examinations.',
      icon: Award,
    },
    {
      title: 'State Rankers',
      description: 'Students securing state ranks in various subjects.',
      icon: Award,
    },
    {
      title: 'Sports Excellence',
      description: 'District and state level achievements in sports.',
      icon: Award,
    },
    {
      title: 'Cultural Awards',
      description: 'Recognition in cultural competitions and events.',
      icon: Award,
    },
  ];

  return (
    <main>
      <Hero
        title="Academics"
        subtitle="Excellence in Education"
        description="Discover our academic programs, curriculum, and achievements."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Classes Offered */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Classes Offered"
            subtitle="From Class 6 to Class 10 with quality education."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {classesOffered.map((cls, index) => (
              <div key={index} className="bg-white rounded-xl p-6 card-shadow text-center">
                <h3 className="text-2xl font-bold text-primary-600 mb-2">{cls.class}</h3>
                <p className="text-gray-600 mb-1">Sections: {cls.sections}</p>
                <p className="text-sm text-gray-500">Students: {cls.students}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Subjects Taught"
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 card-shadow">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {subjects.map((subject, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <BookOpen size={16} className="text-primary-600" />
                    <span className="text-gray-700">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Academic Calendar 2024-25"
            subtitle="Important dates for the academic year."
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 card-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-primary-600" size={20} />
                    <span className="font-medium">Academic Year Begins</span>
                  </div>
                  <span className="text-gray-600">June 12, 2024</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-primary-600" size={20} />
                    <span className="font-medium">First Term Exams</span>
                  </div>
                  <span className="text-gray-600">September 2024</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-primary-600" size={20} />
                    <span className="font-medium">Second Term Exams</span>
                  </div>
                  <span className="text-gray-600">December 2024</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-primary-600" size={20} />
                    <span className="font-medium">Annual Exams</span>
                  </div>
                  <span className="text-gray-600">March 2025</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-primary-600" size={20} />
                    <span className="font-medium">Academic Year Ends</span>
                  </div>
                  <span className="text-gray-600">April 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examinations */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Examination System"
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Assessment</h3>
                <p className="text-gray-700">
                  Regular tests and assignments are conducted throughout the academic year to monitor student progress and provide continuous feedback.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Terminal Examinations</h3>
                <p className="text-gray-700">
                  Mid-term and terminal examinations are conducted to assess comprehensive understanding of the syllabus covered during the term.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Annual Examination</h3>
                <p className="text-gray-700">
                  Final annual examinations are conducted at the end of the academic year covering the entire syllabus as per board guidelines.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 card-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Board Exams</h3>
                <p className="text-gray-700">
                  Class 10 students appear for the Secondary School Certificate (SSC) board examinations conducted by the state board.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Our Achievements"
            subtitle="Celebrating academic and co-curricular excellence."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                title={achievement.title}
                description={achievement.description}
                icon={achievement.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Teaching Methodology"
            centered
          />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 card-shadow">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Interactive Learning</h4>
                    <p className="text-gray-600">Engaging students through interactive discussions, group activities, and hands-on learning experiences.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Personal Attention</h4>
                    <p className="text-gray-600">Individual attention to students to identify their strengths and areas for improvement.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Regular Assessment</h4>
                    <p className="text-gray-600">Continuous evaluation through tests, quizzes, and assignments to track progress.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Remedial Classes</h4>
                    <p className="text-gray-600">Special classes for students who need additional support in specific subjects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
