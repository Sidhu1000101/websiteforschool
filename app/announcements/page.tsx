import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Card from '@/components/Card';

export default function AnnouncementsPage() {
  const announcements = [
    {
      title: 'Admissions Open 2024-25',
      description: 'Admissions are open for the academic year 2024-25 for classes 6th to 10th. Contact the school office for admission forms and further details. Last date for submission: June 30th, 2024.',
      badge: 'New',
      date: 'June 1, 2024',
    },
    {
      title: 'Summer Vacation Notice',
      description: 'Summer vacation will be from May 1st to June 10th, 2024. School will reopen on June 11th, 2024. Students are advised to complete their holiday assignments during the vacation.',
      badge: 'Notice',
      date: 'April 25, 2024',
    },
    {
      title: 'Parent-Teacher Meeting',
      description: 'Parent-teacher meeting for all classes will be held on April 25th, 2024 at 10:00 AM in the school premises. All parents are requested to attend the meeting to discuss their ward\'s progress.',
      badge: 'Important',
      date: 'April 15, 2024',
    },
    {
      title: 'Annual Examination Schedule',
      description: 'Annual examinations for the academic year 2023-24 will commence from March 15th, 2024. Detailed timetable has been circulated to all students. Contact class teachers for any clarifications.',
      badge: 'Exam',
      date: 'March 1, 2024',
    },
    {
      title: 'Science Exhibition',
      description: 'Our school is organizing a science exhibition on February 20th, 2024. Students are encouraged to participate with innovative projects. Best projects will be awarded prizes.',
      badge: 'Event',
      date: 'February 1, 2024',
    },
    {
      title: 'Sports Day Celebration',
      description: 'Annual Sports Day will be celebrated on January 26th, 2024. Various athletic events and competitions will be conducted. Parents are welcome to attend and encourage the participants.',
      badge: 'Event',
      date: 'January 10, 2024',
    },
    {
      title: 'Republic Day Celebration',
      description: 'Republic Day will be celebrated on January 26th, 2024 at 8:30 AM in the school campus. All students are required to attend in school uniform. Cultural programs will follow the flag hoisting.',
      badge: 'Celebration',
      date: 'January 15, 2024',
    },
    {
      title: 'Holiday Declaration',
      description: 'School will remain closed on account of Sankranti festival from January 13th to January 15th, 2024. School will resume normal functioning from January 16th, 2024.',
      badge: 'Holiday',
      date: 'January 10, 2024',
    },
    {
      title: 'Mid-Term Examination Results',
      description: 'Mid-term examination results for all classes have been declared. Parents can collect the report cards from the respective class teachers during school hours.',
      badge: 'Result',
      date: 'December 20, 2023',
    },
  ];

  return (
    <main>
      <Hero
        title="Announcements"
        subtitle="Latest News & Updates"
        description="Stay informed about school news, events, and important announcements."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Announcements */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Latest Announcements"
            subtitle="Important notices and updates from the school."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {announcements.map((announcement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 card-shadow">
                {announcement.badge && (
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full mb-4">
                    {announcement.badge}
                  </span>
                )}
                <p className="text-sm text-gray-500 mb-2">{announcement.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{announcement.title}</h3>
                <p className="text-gray-600">{announcement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Archive Notice */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Archive</h3>
            <p className="text-gray-600 mb-6">
              Looking for older announcements? Previous year's notices and updates are available in the archive section.
            </p>
            <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              View Archive
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
