import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="w-96 h-96 relative bg-black/opacity-40">
      <img className="w-96 h-96 left-0 top-0 absolute" src="https://via.placeholder.com/1440x834" />
      <div className="w-96 h-96 left-0 top-[-5px] absolute">
        <div className="w-96 h-96 left-0 top-0 absolute bg-black/opacity-40" />
        <div className="w-56 h-12 left-[139px] top-[503px] absolute">
          <div className="w-56 h-12 left-0 top-0 absolute bg-gradient-to-r from-gray-800 via-sky-900 to-cyan-600 rounded-3xl" />
          <div className="left-[46px] top-[14px] absolute text-white text-lg font-bold font-['Inter']">Sewa Sekarang!</div>
        </div>
        <div className="left-[139px] top-[317px] absolute text-zinc-100 text-5xl font-semibold font-['Inter'] leading-10">Now, Find Your <br/>Favorite Fields Here!</div>
        <div className="left-[1129px] top-[61px] absolute text-white text-lg font-medium font-['Inter']">Sign in</div>
        <div className="left-[583px] top-[64px] absolute text-white text-lg font-medium font-['Inter']">Reservations</div>
        <div className="left-[760px] top-[63px] absolute text-white text-lg font-medium font-['Inter']">Our Fields</div>
        <div className="left-[912px] top-[61px] absolute text-white text-lg font-medium font-['Inter']">About Us</div>
        <div className="w-36 h-12 left-[1219px] top-[49px] absolute">
          <div className="w-36 h-12 left-0 top-0 absolute bg-gradient-to-r from-gray-800 via-sky-900 to-cyan-600 rounded-3xl" />
          <div className="left-[42px] top-[14px] absolute text-white text-lg font-bold font-['Inter']">Sign up</div>
        </div>
        <div className="w-7 h-7 left-[1045px] top-[59px] absolute" />
        <div className="w-72 h-28 left-[38px] top-[19px] absolute">
          <div className="left-[100px] top-[38px] absolute text-white text-xl font-normal font-['Krona One']">URBAN FIELDS</div>
          <img className="w-28 h-28 left-0 top-0 absolute" src="https://via.placeholder.com/110x110" />
        </div>
      </div>
      <div className="w-96 h-96 left-0 top-[835px] absolute">
        <div className="w-96 h-96 left-0 top-0 absolute bg-neutral-50" />
        <div className="w-96 h-32 left-[74px] top-[148px] absolute text-black text-5xl font-semibold font-['Poppins'] leading-10">Sewa lapangan dengan mudah dan cepat</div>
        <div className="w-96 h-56 left-[74px] top-[252px] absolute text-black text-xl font-light font-['Poppins'] leading-10">Waktunya bermain futsal lebish dari sekedar main futsal.<br/>semuanya dimulai daengan penegeloalan yang siple dan fleksibe dan profible lewat uranba fields</div>
        <img className="w-96 h-96 left-[804px] top-[81px] absolute" src="https://via.placeholder.com/622x576" />
      </div>
      <div className="w-96 h-96 left-0 top-[1573px] absolute">
        <div className="w-96 h-96 left-0 top-[4px] absolute bg-neutral-50" />
        <div className="w-96 h-32 left-[259.12px] top-0 absolute text-black text-4xl font-semibold font-['Poppins'] leading-10">Cari Lapangan terbaik untuk anda Bermain!</div>
        <div className="w-96 left-[192.85px] top-[93px] absolute text-center text-black text-xl font-light font-['Poppins'] leading-10">Tersedia berbagai pilhan lapangan dari Urabn Fields indoensia dan berbagai fasilitas tiap lapangan. Rasakan Keseruan sillaturahmi di lapangan bersama teman amatir anda lainnya sekaang juga </div>
        <div className="w-96 h-96 left-[70.22px] top-[245px] absolute">
          <div className="w-96 h-96 left-0 top-0 absolute">
            <div className="w-96 h-96 left-0 top-0 absolute bg-white rounded-2xl" />
            <img className="w-96 h-64 left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src="https://via.placeholder.com/378x270" />
          </div>
          <div className="w-14 h-7 left-[17.80px] top-[281px] absolute text-center text-black/opacity-40 text-base font-bold font-['Poppins'] leading-10">Venue</div>
          <div className="w-64 h-6 left-[14.83px] top-[309px] absolute text-center text-stone-900 text-xl font-semibold font-['Poppins'] leading-10">Lapangan Generasi Baru</div>
          <div className="w-36 h-5 left-[19.78px] top-[335px] absolute text-center text-zinc-600 text-base font-normal font-['Poppins'] leading-loose">Kota Jakarta Pusat</div>
          <div className="w-44 h-7 left-[19.78px] top-[374px] absolute">
            <div className="Mulai w-10 left-0 top-0 absolute text-center text-zinc-600 text-base font-normal font-['Poppins'] leading-loose">Mulai</div>
            <div className="Sesi w-10 left-[138.31px] top-0 absolute text-center text-zinc-600 text-base font-normal font-['Poppins'] leading-loose">/ Sesi</div>
            <div className="Rp240000 w-24 left-[49.83px] top-0 absolute text-center text-zinc-600 text-base font-bold font-['Poppins'] leading-loose">Rp.240,000</div>
          </div>
        </div>
        <div className="w-96 h-96 left-[976.14px] top-[245px] absolute">
          <div className="w-96 h-96 left-0 top-0 absolute">
            <div className="Rectangle3 w-96 h-96 left-0 top-0 absolute bg-white rounded-2xl" />
            <img className="Image6 w-96 h-64 left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src="https://via.placeholder.com/378x270" />
          </div>
          <div className="w-96 h-96 left-0 top-0 absolute">
            <div className="Rectangle3 w-96 h-96 left-0 top-0 absolute bg-white rounded-2xl" />
            <img className="Image6 w-96 h-64 left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src="https://via.placeholder.com/378x270" />
          </div>
          <div className="Venue w-14 h-7 left-[17.80px] top-[281px] absolute text-center text-black/opacity-40 text-base font-bold font-['Poppins'] leading-10">Venue</div>
          <div className="LapanganGenerasiBaru w-64 h-6 left-[14.83px] top-[309px] absolute text-center text-stone-900 text-xl font-semibold font-['Poppins'] leading-10">Lapangan Generasi Baru</div>
          <div className="KotaJakartaPusat w-36 h-5 left-[19.78px] top-[335px] absolute text-center text-zinc-600 text-base font-normal font-['Poppins'] leading-loose">Kota Jakarta Pusat</div>
          <div className="w-48 h-7 left-[19.78px] top-[374px] absolute">
            <div className="Mulai w-11 left-0 top-0 absolute text-center text-zinc-600 text-base font-normal font-['Poppins'] leading-loose">Mulai</div>
            <div className="Sesi w-11 left-[142.21px] top-0 absolute text-center text-zinc-600 text-base font-normal font-['Poppins'] leading-loose">/ Sesi</div>
            <div className="Rp240000 w-24 left-[51.24px] top-0 absolute text-center text-zinc-600 text-base font-bold font-['Poppins'] leading-loose">Rp.240,000</div>
          </div>
        </div>
        <div className="w-96 h-96 left-[523.18px] top-[245px] absolute">
          <div className="w-96 h-96 left-0 top-0 absolute">
            <div className="Rectangle3 w-96 h-96 left-0 top-0 absolute bg-white rounded-2xl" />
            <img className="Image6 w-96 h-64 left-0 top-0 absolute rounded-tl-2xl rounded-tr-2xl" src="https://via.placeholder.com/378x270" />
          </div>
          <div className="Venue w-14 h-7 left-[17.80px] top-[281px] absolute text-center text-black/opacity-40 text-base font-bold font-['Poppins'] leading-10">Venue</div>
          <div className="LapanganGenerasiBaru w-64 h-6 left-[14.83px] top-[309px] absolute text-center text-stone-900 text-xl font-semibold font-['Poppins'] leading-10">Lapangan Generasi Baru</div>
          <div className="KotaJakartaPusat w-36 h-5 left-[19.78px] top-[335px] absolute text-center text-zinc-600 text-base font-normal font-['Poppins'] leading-loose">Kota Jakarta Pusat</div>
          <div className="w-48 h-7 left-[19.78px] top-[374px] absolute">
            <div className="Mulai w-10 left-0 top-0 absolute text-center text-zinc-600 text-base font-normal font-['Poppins'] leading-loose">Mulai</div>
            <div className="Sesi w-14 left-[135.04px] top-0 absolute text-center text-zinc-600 text-base font-normal font-['Poppins'] leading-loose">/ Sesi</div>
            <div className="Rp240000 w-24 left-[48.04px] top-0 absolute text-center text-zinc-600 text-base font-bold font-['Poppins'] leading-loose">Rp.240,000</div>
          </div>
        </div>
        <div className="w-60 h-14 left-[593.40px] top-[721px] absolute">
          <div className="Rectangle4 w-60 h-14 left-0 top-0 absolute bg-gradient-to-r from-gray-800 via-sky-900 to-cyan-600 rounded-3xl" />
          <div className="SeeMore w-24 left-[83.60px] top-[18px] absolute text-white text-lg font-medium font-['Inter']">See more</div>
        </div>
      </div>
      <div className="Group10 w-96 h-80 left-[-1px] top-[2406px] absolute">
        <div className="Rectangle5 w-96 h-80 left-0 top-0 absolute bg-neutral-50" />
        <div className="AboutUs w-48 h-11 left-[619.57px] top-[12.06px] absolute text-stone-900 text-4xl font-semibold font-['Poppins']">ABOUT US</div>
      </div>
      <div className="UfAdalahPlatformPenyewaanLapanganFutsalYangDirancangUntukMemudahkanAndaDalamMenemukanMemesanDanMenikmatiFasilitasLapanganFutsalTerbaikDiMakassarKamiMemahamiPentingnyaOlahragaDanAktivitasFisikDalamKehidupanSehariHariOlehKarenaItuKamiBerkomitmenUntukMemberikanLayananTerbaikDanPengalamanSewaLapanganYangTakTerlupakan w-96 h-44 left-[164px] top-[2543px] absolute text-center text-black text-2xl font-normal font-['Poppins']">UF adalah platform penyewaan lapangan futsal yang dirancang untuk memudahkan Anda dalam menemukan, memesan, dan menikmati fasilitas lapangan futsal terbaik di Makassar. Kami memahami pentingnya olahraga dan aktivitas fisik dalam kehidupan sehari-hari, oleh karena itu kami berkomitmen untuk memberikan layanan terbaik dan pengalaman sewa lapangan yang tak terlupakan.</div>
      <div className="Footer7LightMode px-44 pt-24 pb-11 left-[-1px] top-[2727px] absolute bg-neutral-50 justify-center items-center inline-flex">
        <div className="Footer self-stretch flex-col justify-start items-start gap-20 inline-flex">
          <div className="PrimaryFooter flex-col justify-start items-center gap-24 flex">
            <div className="Rectangle11 w-96 h-0.5 bg-sky-950" />
            <div className="PrimaryFooter justify-start items-center gap-72 inline-flex">
              <img className="ImageRemovebgPreview1 w-44 h-36" src="https://via.placeholder.com/174x145" />
              <div className="Frame38 self-stretch flex-col justify-start items-start gap-10 inline-flex">
                <div className="Frame37 flex-col justify-start items-start gap-4 flex">
                  <div className="OfficeAddress justify-start items-center gap-4 inline-flex">
                    <div className="RoundPlace24px w-6 h-6 relative">
                      <img className="Shape w-3.5 h-5 left-[5px] top-[2px] absolute" src="https://via.placeholder.com/14x19" />
                    </div>
                    <div className="AbcCompany text-slate-900 text-sm font-normal font-['DM Sans'] leading-snug">ABC Company, 123 East, 17th Street, St. louis 10001</div>
                  </div>
                  <div className="Frame36 justify-start items-start gap-28 inline-flex">
                    <div className="PhoneNumber justify-start items-center gap-4 flex">
                      <div className="RoundPhone24px w-6 h-6 relative">
                      </div>
                      <div className="1234567890 text-slate-900 text-sm font-normal font-['Assistant']">(123) 456-7890</div>
                    </div>
                    <div className="Fax justify-start items-center gap-4 flex">
                      <div className="RoundLocalPrintshop24px w-6 h-6 relative">
                        <img className="Shape w-5 h-4 left-[2px] top-[3px] absolute" src="https://via.placeholder.com/20x18" />
                      </div>
                      <div className="1234567890 text-slate-900 text-sm font-normal font-['Assistant']">(123) 456-7890</div>
                    </div>
                  </div>
                </div>
                <div className="Frame35 self-stretch justify-start items-center gap-6 inline-flex">
                  <div className="SocialMedia opacity-50 text-slate-900 text-sm font-medium font-['DM Sans']">Social Media</div>
                  <div className="Frame34 justify-start items-start gap-6 flex">
                    <div className="FacebookBlack1 w-6 h-6 relative">
                      <div className="Rectangle w-6 h-6 left-0 top-0 absolute" />
                    </div>
                    <div className="TwitterBlack1 w-6 h-6 relative">
                      <div className="Rectangle w-6 h-6 left-0 top-0 absolute" />
                    </div>
                    <div className="LinkedinBlack1 w-6 h-6 relative">
                      <div className="Rectangle w-6 h-6 left-0 top-0 absolute" />
                      <img className="Linkedin w-4 h-4 left-[3px] top-[4px] absolute" src="https://via.placeholder.com/18x16" />
                    </div>
                    <div className="YoutubeColor1 w-6 h-6 relative">
                      <div className="Rectangle w-6 h-6 left-0 top-0 absolute" />
                      <img className="Youtube w-4 h-3 left-[3px] top-[6px] absolute" src="https://via.placeholder.com/18x13" />
                    </div>
                    <div className="InstagramBlack1 w-6 h-6 relative">
                      <div className="Rectangle w-6 h-6 left-0 top-0 absolute" />
                      <img className="Instagram w-4 h-4 left-[3px] top-[3px] absolute" src="https://via.placeholder.com/18x18" />
                    </div>
                    <div className="GoogleplusBlack1 w-6 h-6 relative">
                      <div className="Rectangle w-6 h-6 left-0 top-0 absolute" />
                      <img className="Googleplus w-4 h-2.5 left-[3px] top-[7px] absolute" src="https://via.placeholder.com/18x11" />
                    </div>
                    <div className="PinterestColor1 w-6 h-6 relative">
                      <div className="Rectangle w-6 h-6 left-0 top-0 absolute" />
                    </div>
                    <div className="RssBlack1 w-6 h-6 relative">
                      <div className="Rectangle w-6 h-6 left-0 top-0 absolute" />
                      <img className="Rss w-4 h-4 left-[3px] top-[3px] absolute" src="https://via.placeholder.com/18x18" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="SecondaryFooter flex-col justify-start items-start gap-6 flex">
            <div className="Rectangle16 w-96 h-px opacity-20 bg-sky-300" />
            <div className="SecondaryFooter justify-start items-start gap-80 inline-flex">
              <div className="Frame33 justify-start items-start gap-10 flex">
                <div className="AboutUs text-slate-900 text-sm font-medium font-['DM Sans'] uppercase">About us</div>
                <div className="ContactUs text-slate-900 text-sm font-medium font-['DM Sans'] uppercase">Contact us</div>
                <div className="Help text-slate-900 text-sm font-medium font-['DM Sans'] uppercase">Help</div>
                <div className="PrivacyPolicy text-slate-900 text-sm font-medium font-['DM Sans'] uppercase">Privacy Policy</div>
                <div className="Disclaimer text-slate-900 text-sm font-medium font-['DM Sans'] uppercase">Disclaimer</div>
              </div>
              <div className="Copyright2018M opacity-50 text-slate-900 text-sm font-normal font-['Assistant']">Copyright © 2022 • ABC Company.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Group11 w-96 h-80 left-[-1px] top-[2406px] absolute">
        <div className="Rectangle5 w-96 h-80 left-0 top-0 absolute bg-neutral-50" />
        <div className="AboutUs w-48 h-11 left-[619.57px] top-[12.06px] absolute text-stone-900 text-4xl font-semibold font-['Poppins']">ABOUT US</div>
      </div>
      <div className="w-96 h-44 left-[164px] top-[2543px] absolute text-center text-black text-2xl font-normal font-['Poppins']">UF adalah platform penyewaan lapangan futsal yang dirancang untuk memudahkan Anda dalam menemukan, memesan, dan menikmati fasilitas lapangan futsal terbaik di Makassar. Kami memahami pentingnya olahraga dan aktivitas fisik dalam kehidupan sehari-hari, oleh karena itu kami berkomitmen untuk memberikan layanan terbaik dan pengalaman sewa lapangan yang tak terlupakan.</div>
      <div className="Footer7LightMode px-44 pt-24 pb-11 left-[-1px] top-[2727px] absolute bg-neutral-50 justify-center items-center inline-flex">
        <div className="Footer self-stretch flex-col justify-start items-start gap-20 inline-flex">
          <div className="PrimaryFooter flex-col justify-start items-center gap-24 flex">
            <div className="Rectangle11 w-96 h-0.5 bg-sky-950" />
            <div className="PrimaryFooter justify-start items-center gap-72 inline-flex">
              <img className="ImageRemovebgPreview1 w-44 h-36" src="https://via.placeholder.com/174x145" />
              <div className="Frame38 self-stretch flex-col justify-start items-start gap-10 inline-flex">
                <div className="Frame37 flex-col justify-start items-start gap-4 flex">
                  <div className="OfficeAddress justify-start items-center gap-4 inline-flex">
                    <div className="RoundPlace24px w-6 h-6 relative">
                      <img className="Shape w-3.5 h-5 left-[5px] top-[2px] absolute" src="https://via.placeholder.com/14x19" />
                    </div>
                    <div className="AbcCompany text-slate-900 text-sm font-normal font-['DM Sans'] leading-snug">ABC Company, 123 East, 17th Street, St. louis 10001</div>
                  </div>
                  <div className="Frame36 justify-start items-start gap-28 inline-flex">
                    <div className="PhoneNumber justify-start items-center gap-4 flex">
                      <div className="RoundPhone24px w-6 h-6 relative">
                      </div>
                      <div className="1234567890 text-slate-900 text-sm font-normal font-['Assistant']">(123) 456-7890</div>
                    </div>
                    <div className="Fax justify-start items-center gap-4 flex">
                      <div className="RoundLocalPrintshop24px w-6 h-6 relative">
                        <img className="Shape w-5 h-4 left-[2px] top-[3px] absolute" src="https://via.placeholder.com/20x18" />
                      </div>
                      <div className="1234567890 text-slate-900 text-sm font-normal font-['Assistant']">(123) 456-7890</div>
                    </div>
                  </div>
                </div>
                <div className="Frame35 self-stretch justify-start items-center gap-6 inline-flex">
                  <div className="SocialMedia opacity-50 text-slate-900 text-sm font-medium font-['DM Sans']">Social Media</div>
                  <div className="Frame34 justify-start items-start gap-6 flex">
                    <div className="FacebookBlack1 w-6 h-6 relative">
                      <div className="Rectangle w-6 h-6 left-0 top-0 absolute" />
                    </div>
                    <div className="TwitterBlack1 w-6 h-6 relative">
                      <div className="Rectangle w-6 h-6 left-0 top-0 absolute" />
                    </div>
                    <div className="LinkedinBlack1 w-6 h-6 relative">
                      <div className="Rectangle w-6 h-6 left-0 top-0 absolute" />
                      <img className="Linkedin w-4 h-4 left-[3px] top-[4px] absolute" src="https://via.placeholder.com/18x16" />
                    </div>
                    <div className="YoutubeColor1 w-6 h-6 relative">
                      <div className="Rectangle w-6 h-6 left-0 top-0 absolute" />
                      <img className="Youtube w-4 h-3 left-[3px] top-[6px] absolute" src="https://via.placeholder.com/18x13" />
                    </div>
                    <div className="InstagramBlack1 w-6 h-6 relative">
                      <div className="Rectangle w-6 h-6 left-0 top-0 absolute" />
                      <img className="Instagram w-4 h-4 left-[3px] top-[3px] absolute" src="https://via.placeholder.com/18x18" />
                    </div>
                    <div className="GoogleplusBlack1 w-6 h-6 relative">
                      <div className="Rectangle w-6 h-6 left-0 top-0 absolute" />
                      <img className="Googleplus w-4 h-2.5 left-[3px] top-[7px] absolute" src="https://via.placeholder.com/18x11" />
                    </div>
                    <div className="PinterestColor1 w-6 h-6 relative">
                      <div className="Rectangle w-6 h-6 left-0 top-0 absolute" />
                    </div>
                    <div className="RssBlack1 w-6 h-6 relative">
                      <div className="Rectangle w-6 h-6 left-0 top-0 absolute" />
                      <img className="Rss w-4 h-4 left-[3px] top-[3px] absolute" src="https://via.placeholder.com/18x18" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="SecondaryFooter flex-col justify-start items-start gap-6 flex">
            <div className="Rectangle16 w-96 h-px opacity-20 bg-sky-300" />
            <div className="SecondaryFooter justify-start items-start gap-80 inline-flex">
              <div className="Frame33 justify-start items-start gap-10 flex">
                <div className="AboutUs text-slate-900 text-sm font-medium font-['DM Sans'] uppercase">About us</div>
                <div className="ContactUs text-slate-900 text-sm font-medium font-['DM Sans'] uppercase">Contact us</div>
                <div className="Help text-slate-900 text-sm font-medium font-['DM Sans'] uppercase">Help</div>
                <div className="PrivacyPolicy text-slate-900 text-sm font-medium font-['DM Sans'] uppercase">Privacy Policy</div>
                <div className="Disclaimer text-slate-900 text-sm font-medium font-['DM Sans'] uppercase">Disclaimer</div>
              </div>
              <div className="Copyright2018M opacity-50 text-slate-900 text-sm font-normal font-['Assistant']">Copyright © 2022 • ABC Company.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
