import Header from "./Components/Header";
import "./app.css";
import videoBg from "./assets/q-ba39153a.webm";
import profileImg from "./assets/Profile.jpg";
function App() {
  return (
    <>
      <Header />
      <main className="flex-1 mt-16">
        <div className="container max-w-screen-md h-full flex justify-center text-center items-center">
          <div className="w-full h-full flex items-center justify-center relative">
            <video
              src={videoBg}
              className="hidden scale-150 dark:block select-none"
              muted
              loop
              autoPlay="true"
              playsInline
              preload="false"
            />
            <div className="dark:hidden w-1/2 flex flex-col justify-center items-center text-center">
              <h1 className="font-kalameh_Black text-4xl select-none">
                آموزش برنامه نویسی به صورت تخصصی
              </h1>
              <p className="text-lg font-kalameh_Regular select-none">
                لایک و کامنت یادت نره که باعث دلگرمیه ممنون از نگاهت
              </p>
            </div>
            <div className="dark:absolute w-1/2 dark:w-60 dark:h-60 rounded-full overflow-hidden p-px bg-purple-500 shadow-xl shadow-indigo-500/20">
              <img
                src={profileImg}
                alt="profileImage"
                className="dark:w-full dark:h-full rounded-full select-none"
              />
            </div>
            <div className="hidden dark:block text-white absolute bottom-16 select-none">
              <p className="text-2xl font-kalameh_Bold">
                لایک و کامنت یادت نره که باعث دلگرمیه ممنون از نگاهت
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
