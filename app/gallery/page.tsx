import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Gallery from '@/components/Gallery';

export default function GalleryPage() {
  const galleryImages = Array.from({ length: 12 }, (_, i) => `/gallery-${i + 1}.jpg`);

  return (
    <main>
      <Hero
        title="School Gallery"
        subtitle="Glimpses of Our School Life"
        description="Explore our school activities, events, and celebrations through our photo gallery."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Photo Gallery"
            subtitle="Memories and moments from our school."
            centered
          />
          <Gallery images={galleryImages} columns={4} />
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Gallery Categories"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 card-shadow text-center">
              <h3 className="font-bold text-gray-900 mb-2">Academic Activities</h3>
              <p className="text-sm text-gray-600">Classroom learning, projects, and educational programs</p>
            </div>
            <div className="bg-white rounded-xl p-6 card-shadow text-center">
              <h3 className="font-bold text-gray-900 mb-2">Sports & Games</h3>
              <p className="text-sm text-gray-600">Sports events, competitions, and physical activities</p>
            </div>
            <div className="bg-white rounded-xl p-6 card-shadow text-center">
              <h3 className="font-bold text-gray-900 mb-2">Cultural Events</h3>
              <p className="text-sm text-gray-600">Annual day, celebrations, and cultural programs</p>
            </div>
            <div className="bg-white rounded-xl p-6 card-shadow text-center">
              <h3 className="font-bold text-gray-900 mb-2">School Events</h3>
              <p className="text-sm text-gray-600">Special occasions, ceremonies, and gatherings</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
