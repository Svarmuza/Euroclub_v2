import { useTranslations } from 'next-intl';
import PhotoGallery from '@/components/PhotoGallery';
import { accommodationImages } from '@/data/accommodationImages';

export default function AccommodationContent() {
    const t = useTranslations('Accommodation');

    return (
        <>
            <section
                className="py-20 px-4"
                data-section-name="hero-section"
                style={{
                    backgroundColor: '#D1F1FF',
                    backgroundImage: 'url(/uploads/smjestaj/euroclub_brodarica_crop_1600.webp)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">
                        {t('hero.title')}
                    </h1>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className="w-full">
                            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                                <video
                                    controls
                                    autoPlay
                                    muted
                                    loop
                                    className="w-full h-full object-cover"
                                    poster="/images/smjestaj/video-poster.jpg"
                                >
                                    <source src="/uploads/smjestaj/smjestaj.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                                <p dangerouslySetInnerHTML={{ __html: t('main.intro') }} />
                                <p>{t('main.supervision')}</p>
                                <p>{t('main.rooms')}</p>
                                <p>{t('main.facilities')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-16">
                <PhotoGallery
                    images={accommodationImages.sobe}
                    columns={{ desktop: 4, tablet: 3, mobile: 2 }}
                />
            </section>

            <section id="smjestaj-sigurno" className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                            {t('safety.title')}
                        </h2>

                        <div className="max-w-4xl mx-auto">
                            <div className="text-lg text-gray-700 leading-relaxed">
                                <p>{t('safety.description')}</p>
                                <p>{t('safety.details')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <PhotoGallery
                            images={accommodationImages.sigurno}
                            columns={{ desktop: 4, tablet: 3, mobile: 2 }}
                        />
                    </div>
                </div>
            </section>

            <section id="smjestaj-zabavno" className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                            {t('fun.title')}
                        </h2>

                        <div className="max-w-4xl mx-auto">
                            <div className="text-lg text-gray-700 leading-relaxed">
                                <p>{t('fun.beachActivities')}</p>
                                <p>{t('fun.excursions')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <PhotoGallery
                            images={accommodationImages.zabavno}
                            columns={{ desktop: 4, tablet: 3, mobile: 2 }}
                        />
                    </div>
                </div>
            </section>

            <section id="smjestaj-lokacija" className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                            {t('location.title')}
                        </h2>

                        <div className="max-w-4xl mx-auto">
                            <div className="text-lg text-gray-700 leading-relaxed">
                                <p>{t('location.description')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <PhotoGallery
                            images={accommodationImages.lokacija}
                            columns={{ desktop: 4, tablet: 3, mobile: 2 }}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
