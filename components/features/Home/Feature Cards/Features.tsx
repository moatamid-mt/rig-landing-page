import Image from 'next/image';

const featuresData = [
  {
    title: "Abstract Away K8s Primitives",
    description: "Deploy, manage and debug applications with end-to-end ownership without experiencing bottlenecks or battling Kubernetes hurdles.",
    imageSrc: "/Home/feature-1.png",
  },
  {
    title: "Proactively Troubleshoot",
    description: "Identify availability issues, misconfigurations, lack of resources, K8s anomalies and failed deploys w. feedback and health checks.",
    imageSrc: "/Home/feature-2.png",
  },
  {
    title: "Developer Tools",
    description: "Robust tooling that encompass a CLI, an extensive developer-interfaces and cloud-native CI/CD integrations.",
    imageSrc: "/Home/feature-3.png",
  },
];

export default function Features() {
  return (
    <section className="w-full max-w-[1440px] mx-auto  py-5 flex flex-col items-center">
      
     
      <div className="flex flex-col items-center text-center max-w-3xl mb-12">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 border border-neutral-200/80 mb-4 shadow-2xs">
          Fixing K8 complexity
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal tracking-tight text-neutral-900 leading-[1.15]">
          Don’t let the complexity of Kubernetes leak into your engineering team
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full justify-items-center">
        {featuresData.map((feature, index) => (
 <div 
      key={index} 
      className="w-full max-w-[450px] md:max-w-[390px] bg-white border border-neutral-200/80 rounded-3xl p-6" >
            
            <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 flex items-center justify-center p-4">
              <Image
                src={feature.imageSrc}
                alt={feature.title}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* النصوص */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-lg font-medium text-neutral-900 mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}