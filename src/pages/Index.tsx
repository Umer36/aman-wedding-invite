import { useState, useEffect } from "react";
import { Heart, Calendar, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/wedding-hero.jpg";

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Remove loader completely after fade animation
    const hideTimer = setTimeout(() => {
      setShowLoader(false);
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Loader Screen */}
      {showLoader && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
          <div className="relative z-10 text-center px-4 animate-fade-in">
            <Heart className="w-20 h-20 mx-auto text-primary animate-pulse mb-8" fill="currentColor" />
            <h1 className="font-playfair text-7xl md:text-9xl font-bold text-white mb-6 drop-shadow-2xl">
              Aman's Wedding
            </h1>
            <p className="font-playfair text-3xl md:text-4xl text-white/90 drop-shadow-lg animate-pulse">
              A Celebration of Love
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      {!showLoader && (
        <div className="animate-fade-in relative overflow-hidden min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f472b6%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
          
          <div className="relative z-10">
        <main className="container mx-auto h-screen flex items-center justify-center px-2">
          {/* Single Page Invitation */}
          <section className="w-full max-w-md mx-auto relative overflow-hidden">
            {/* Floating Hearts Background */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <Heart
                  key={i}
                  className={`absolute text-primary/15 animate-float-heart-${(i % 3) + 1}`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${100 + Math.random() * 20}%`,
                    width: `${15 + Math.random() * 20}px`,
                    height: `${15 + Math.random() * 20}px`,
                    animationDelay: `${Math.random() * 10}s`
                  }}
                  fill="currentColor"
                />
              ))}
            </div>

            <div className="w-full relative z-10">
              <div className="bg-white/95 border-4 border-rose-300/50 rounded-3xl p-3 shadow-2xl relative overflow-hidden h-[95vh] backdrop-blur-sm animate-fade-in">
                
                {/* Decorative Corner Elements */}
                <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-rose-300 rounded-tl-2xl animate-pulse"></div>
                <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-rose-300 rounded-tr-2xl animate-pulse"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-rose-300 rounded-bl-2xl animate-pulse"></div>
                <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-rose-300 rounded-br-2xl animate-pulse"></div>
                
                {/* Header */}
                <div className="text-center mb-4 animate-slide-down">
                  <div className="relative">
                    <Heart className="w-10 h-10 mx-auto text-rose-500 animate-bounce mb-3" fill="currentColor" />
                    <div className="absolute inset-0 animate-ping">
                      <Heart className="w-10 h-10 mx-auto text-rose-300/50" fill="currentColor" />
                    </div>
                  </div>
                  <h1 className="font-playfair text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2 animate-pulse">The Wedding</h1>
                  <p className="text-gray-600 text-sm italic mb-3 animate-fade-in">"In the name of Allah, the most Beneficent & Merciful"</p>
                  <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mb-4 rounded-full animate-pulse"></div>
                </div>

                {/* Parents Names */}
                <div className="text-center mb-3 animate-slide-up">
                  <p className="text-gray-700 text-base mb-2 font-medium">Mrs. & Mr. Arif Rashid Sayyad</p>
                  <p className="text-gray-600 text-sm mb-3">Request your company for their Son</p>
                </div>

                {/* Couple Names */}
                <div className="text-center mb-4 animate-fade-in">
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-4 border-2 border-rose-200 shadow-lg relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-100/30 to-pink-100/30 animate-pulse"></div>
                    <div className="relative z-10">
                      <h2 className="font-playfair text-4xl bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-3 font-bold">Aman</h2>
                      <div className="flex items-center justify-center mb-3">
                        <div className="bg-gradient-to-r from-rose-400 to-pink-400 text-white px-4 py-1 rounded-full shadow-md">
                          <span className="font-bold text-sm">WITH</span>
                        </div>
                      </div>
                      <h2 className="font-playfair text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 font-bold">Afroja</h2>
                      <p className="text-gray-600 text-sm">(D/o Late Mrs. & Mr. Jahangir Shoukat Jamadar)</p>
                    </div>
                  </div>
                </div>

                {/* Wedding Details */}
                <div className="text-center mb-4 animate-slide-up">
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-3 border-2 border-rose-200 shadow-md relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 to-pink-100/20 animate-pulse rounded-2xl"></div>
                    <div className="relative z-10">
                      <p className="text-gray-700 text-base mb-2 font-semibold animate-pulse">◊ Welcome You ◊</p>
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Calendar className="w-5 h-5 text-rose-500 animate-pulse" />
                        <p className="text-gray-700 text-base font-medium">Thursday, 23rd October 2025</p>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">(10th Rabi-ul-Sani 1447 Hijri)</p>
                      <div className="flex items-center justify-center gap-2">
                        <Clock className="w-5 h-5 text-rose-500 animate-pulse" />
                        <p className="text-gray-700 text-base font-medium">At 11:30am</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Venue */}
                <div className="text-center mb-4 animate-fade-in">
                  <h3 className="font-playfair text-xl text-gray-700 mb-2 font-bold">◊ Venue ◊</h3>
                  <div className="flex items-start justify-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-rose-500 mt-1" />
                    <div className="text-gray-700 text-center">
                      <p className="text-base font-bold">Shahi Darbar Hall</p>
                      <p className="text-base">Takali Road, Miraj</p>
                    </div>
                  </div>
                  <a href="https://maps.google.com/?q=Shahi+Darbar+Hall+Takali+Road+Miraj" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-sm hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>

                {/* Special Message */}
                <div className="text-center animate-slide-up">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-3 border-2 border-purple-200 shadow-md">
                    <p className="text-gray-700 text-sm italic font-medium">Our Beloved Kids Join Us In Inviting You</p>
                    <p className="text-gray-600 text-sm mt-1">Rayan, Riza, Alayua, Adan, Farhan, Hasnain, Bilal, Hamza</p>
                  </div>
                </div>


              </div>
            </div>
          </section>
            </main>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;