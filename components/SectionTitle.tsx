interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = false }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h2>
      {subtitle && (
        <p className={`text-lg text-gray-600 max-w-2xl ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
      <div className={`w-20 h-1 bg-primary-600 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;
