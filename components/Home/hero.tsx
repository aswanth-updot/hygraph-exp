import Image from "next/image";

export default function HeroBanner() {
    return (
        <section className="overflow-hidden bg-[#fffaf5]">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Content */}
                    <div>
                        <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-[#fc8019]">
                            Food Discovery Platform
                        </span>

                        <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-[#282c3f] lg:text-6xl">
                            Explore Foods,
                            <span className="block text-[#fc8019]">
                                Discover Restaurants
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-[#686b78]">
                            A curated collection of delicious foods, organized by
                            categories and connected to restaurants that serve them.
                            Discover your next favorite dish and learn where to find it.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        {/* Background decoration */}
                        <div className="absolute -left-8 top-8 h-64 w-64 rounded-full bg-orange-100 blur-3xl" />
                        <div className="absolute -right-8 bottom-8 h-64 w-64 rounded-full bg-orange-200 blur-3xl" />

                        <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
                            <Image
                                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
                                alt="Delicious food platter"
                                className="h-[500px] w-full object-cover"
                                height={500}
                                width={1000}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}