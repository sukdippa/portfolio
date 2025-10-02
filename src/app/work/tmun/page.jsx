export default function Tmun () {
  return (
    <div className="flex flex-col justify-center items-center gap-12 bg-[#1999c2] min-h-screen">
      <img src="/tmun/tmun_full.png" alt="Toronto Model United Nations" className="px-[20rem] py-24" />
      
      {/* TMUN Design Gallery */}
      <main>
        <img 
            src="/tmun/me.png" 
            alt="Me with TMUN merch" 
            className="w-[30rem] h-auto rounded-lg mx-auto"
          />
        <video 
            className="w-full h-full object-cover rounded-lg my-12"
            controls
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/tmun/video-ga.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
          <img 
            src="/tmun/avatar.png" 
            alt="TMUN Avatar Design" 
            className="w-full h-auto rounded-lg"
            style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
          />
          <img 
            src="/tmun/boeing.png" 
            alt="TMUN Boeing Committee" 
            className="w-full h-auto rounded-lg"
            style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
          />
          <img 
            src="/tmun/diana.png" 
            alt="TMUN Diana Committee" 
            className="w-full h-auto rounded-lg"
            style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
          />
          <img 
            src="/tmun/evangelion.png" 
            alt="TMUN Evangelion Design" 
            className="w-full h-auto rounded-lg"
            style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
          />
          <img 
            src="/tmun/ga african union.png" 
            alt="TMUN GA African Union" 
            className="w-full h-auto rounded-lg"
            style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
          />
          <img 
            src="/tmun/ga unicef.png" 
            alt="TMUN GA UNICEF" 
            className="w-full h-auto rounded-lg"
            style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
          />
          <img 
            src="/tmun/ga unodc.png" 
            alt="TMUN GA UNODC" 
            className="w-full h-auto rounded-lg"
            style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
          />
          <img 
            src="/tmun/ga.unhrc.png" 
            alt="TMUN GA UNHRC" 
            className="w-full h-auto rounded-lg"
            style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
          />
          <img 
            src="/tmun/lord of the flies.png" 
            alt="TMUN Lord of the Flies Committee" 
            className="w-full h-auto rounded-lg"
            style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
          />
          <img 
            src="/tmun/matrix ad hoc.png" 
            alt="TMUN Matrix Ad Hoc" 
            className="w-full h-auto rounded-lg"
            style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
          />
          <img 
            src="/tmun/matrix crisis.png" 
            alt="TMUN Matrix Crisis" 
            className="w-full h-auto rounded-lg"
            style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
          />
          <img 
            src="/tmun/poland.png" 
            alt="TMUN Poland Committee" 
            className="w-full h-auto rounded-lg"
            style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
          />
          <img 
            src="/tmun/prohibition.png" 
            alt="TMUN Prohibition Committee" 
            className="w-full h-auto rounded-lg"
            style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
          />
          <img 
            src="/tmun/revolution.png" 
            alt="TMUN Revolution Committee" 
            className="w-full h-auto rounded-lg"
            style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
          />
          <img 
            src="/tmun/scp.png" 
            alt="TMUN SCP Committee" 
            className="w-full h-auto rounded-lg"
            style={{ boxShadow: "0px 45px 57px -25px rgba(83, 98, 115, 0.3)" }}
          />
        </div>
      </main>
    </div>
  );
}
