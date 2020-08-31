import React from 'react';

const Home = () => {
    const catalogs = [
        {
            name: "Golang Eğitimleri",
            description: "Youtube üzerinde herkese açık olarak eğitim veren bir çok eğitmenin eğitim listelerini incele, istediğin eğitimi seç ve hemen izlemeye başlaya.",
            posterPath: "https://miro.medium.com/max/3152/0*7vQ8eRc28yz9k__r.png"
        },
        {
            name: "Python Eğitimleri",
            description: "Youtube üzerinde herkese açık olarak eğitim veren bir çok eğitmenin eğitim listelerini incele, istediğin eğitimi seç ve hemen izlemeye başlaya.",
            posterPath: "https://datawider.com/wp-content/uploads/2019/11/How-to-Learn-Python.jpg"
        },
        {
            name: "ReactJs Eğitimleri",
            description: "Youtube üzerinde herkese açık olarak eğitim veren bir çok eğitmenin eğitim listelerini incele, istediğin eğitimi seç ve hemen izlemeye başlaya.",
            posterPath: "https://miro.medium.com/max/3840/1*vHHBwcUFUaHWXntSnqKdCA.png"
        },
        {
            name: "Angular Eğitimleri",
            description: "Youtube üzerinde herkese açık olarak eğitim veren bir çok eğitmenin eğitim listelerini incele, istediğin eğitimi seç ve hemen izlemeye başlaya.",
            posterPath: "https://miro.medium.com/max/760/1*IpJblEKT0Rbrg61W_LM0-A.png"
        },
        {
            name: "Java Eğitimleri",
            description: "Youtube üzerinde herkese açık olarak eğitim veren bir çok eğitmenin eğitim listelerini incele, istediğin eğitimi seç ve hemen izlemeye başlaya.",
            posterPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbMg5nwcT080pYBMHGbJLxb8Tg9hIu6OUHHQ&usqp=CAU"
        },
        {
            name: "Mobil Programlama Eğitimleri",
            description: "Youtube üzerinde herkese açık olarak eğitim veren bir çok eğitmenin eğitim listelerini incele, istediğin eğitimi seç ve hemen izlemeye başlaya.",
            posterPath: "https://cdn1.ntv.com.tr/gorsel/8YFS9X8rLEGnd0SLpojGGQ.jpg?width=1000&mode=crop&scale=both"
        }
    ];
    return (
        <div className="bg-gray-900 text-white">
            <section className="text-gray-700 body-font">
                <div className=" mx-auto flex flex-wrap flex-col">
                    <div className="h-64 w-full left-0 -z-9999">
                        <img
                            className="object-cover object-center w-full h-full"
                            src="https://good2bsocial.com/wp-content/uploads/2019/05/shutterstock_1128653108-1024x605.jpg"
                        />
                    </div>
                    <div
                        className="absolute text-6xl justify-center w-full mx-auto font-bold md:text-white mt-16 z-10 pt-8">
                        <span className="flex justify-center text-white w-full" style={{"filter":"drop-shadow(50px 40px 3px rgb(88,233,240)"}}><span
                            className="opacity-50">Eğitim</span><span>Meğitim.com</span></span>
                    </div>
                </div>
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Yazılım
                            Kategorileri</h1>
                        <p className="lg:w-2/3 mx-auto text-purple-400 leading-relaxed text-base">Sizin için Yazılım
                            alanında populer olan alanları kategorize ettik, bir kategori seç ve Youtube üzerinde
                            herkese açık olarak eğitim veren bir çok eğitmenin içerik listelerini incele, istediğin
                            eğitimi seç ve hemen izlemeye başlaya.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {
                            catalogs.map(cat =>
                                <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
                                    <div className="flex relative">
                                        <img alt="gallery"
                                             className="absolute inset-0 w-full h-full object-cover object-center "
                                             src={cat.posterPath}/>
                                        <div
                                            className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE
                                                SUBTITLE</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{cat.name}</h1>
                                            <p className="leading-relaxed">{cat.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;