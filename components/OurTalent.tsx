import React from 'react';
import { talentsData } from '../data';

export default function OurTalent() {
    return (
        <section id="our-talent" className="py-20 bg-slate-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-on-scroll">
                    <span className="inline-block py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-emerald-100 text-emerald-700">
                        Our Talent
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                        Tim Profesional UKM MC UPNVJ
                    </h2>
                    <div className="h-1.5 w-20 bg-emerald-600 rounded-full mt-4 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {talentsData.map((talent) => (
                        <div
                            key={talent.id}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group flex flex-col items-center text-center"
                        >
                            <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden ring-4 ring-emerald-50 group-hover:ring-emerald-200 transition-all">
                                <img
                                    src={talent.image}
                                    alt={talent.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-1">{talent.name}</h3>
                            <p className="text-emerald-600 font-medium text-sm mb-3">{talent.position}</p>

                            <div className="w-full h-px bg-slate-100 my-3"></div>

                            <p className="text-slate-600 text-sm font-medium">{talent.specialization}</p>

                            {talent.quote && (
                                <p className="mt-4 text-xs text-slate-400 italic">
                                    "{talent.quote}"
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
