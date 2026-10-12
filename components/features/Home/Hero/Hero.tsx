import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-2 pt-13 pb-24 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0">

                {/* العنوان الرئيسي */}
                <h1 className="text-4xl sm:text-5xl lg:text-[47px] font-normal tracking-tight text-neutral-900 leading-[1.08] mb-6">
                    The application platform for Kubernetes
                </h1>

                {/* الوصف */}
                <p className="text-base sm:text-lg text-neutral-500 leading-relaxed mb-8 max-w-lg">
                    Deploy, manage and troubleshoot cloud-native applications at scale without overwhelming your engineers with the complexity of Kubernetes.
                </p>

                {/* الأزرار */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                    <Link
                        href="/docs"
                        className="flex items-center gap-2 bg-[#111111] hover:bg-[#222222] text-white text-sm font-medium px-5 py-3 rounded-xl transition-all duration-200 shadow-sm"
                    >
                        <span>Documentation</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white hover:bg-neutral-50 text-neutral-900 text-sm font-medium px-5 py-3 rounded-xl border border-neutral-200 transition-all duration-200 shadow-sm"
                    >
                        <svg className="w-4 h-4 fill-current text-neutral-900" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>Get Started</span>
                    </Link>
                </div>

            </div>

            <div className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-none flex justify-center lg:justify-end">
                <div className="relative w-full aspect-square max-w-[500px] lg:max-w-[500px] bg-gradient-to-br from-blue-100/60 to-blue-50/20 rounded-3xl p-4 sm:p-6 flex items-center justify-center border border-blue-100/50 shadow-inner overflow-hidden">

                    <Image
                        src="/Home/Hero.png"
                        alt=""
                        fill
                        className="object-contain p-2 sm:p-4"
                        priority
                    />
                </div>
            </div>

        </section>
    );
}