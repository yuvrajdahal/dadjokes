import { useGetDataQuery } from "../../slices/jokes";
import Button from "../../components/Buttons";
import { FaQuoteLeft } from "react-icons/fa";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import Text from "../../components/Text";
import { useEffect, useState } from "react";
import Spinner from "../../components/Loading/Spinner";
const App = () => {
  const {
    data: state,
    isSuccess,
    isError,
    isLoading,
    refetch,
    error,
  } = useGetDataQuery();
  const [showJoke, setIsShowJoke] = useState(false);
  function getDataHandler() {
    setIsShowJoke(true);
    if (showJoke) {
      refetch();
    }
  }
  const title = showJoke ? state?.body[0]?.setup : "What a day it is or is it?";
  const punchline = showJoke ? state?.body[0].punchline : "HaHa?!:_)";
  const errorMessage =
    error?.status === 429
      ? "You are dad now .Be Grand-Dad tommorow"
      : "Something went wrong.Try again";
  return (
    <div className="h-full w-full flex">
      <LeftImage />
      <div className="w-full md:w-[60%] flex flex-col justify-center items-center ">
        <div
          className={`${
            !isSuccess && "h-1/2"
          }  w-full lg:w-3/4 flex flex-col justify-center items-center space-x-4 px-4`}
        >
          <div className="w-full h-full ">
            <div
              className={`h-full w-full	border border-c-gray rounded-md flex flex-col justify-center items-center ${
                isSuccess && "py-10"
              }`}
            >
              <span className="inline-flex gap-2 text-c-gray font-vt323 px-4 ">
                {isSuccess && (
                  <>
                    <FaQuoteLeft className="w-5 h-5 text-sm" />
                    <div>
                      <Text className="text-4xl text-center">{title}</Text>
                      <Text as="div" className="text-xl">
                        {punchline}
                      </Text>

                      <div className="text-lg text-right ">-Human</div>
                    </div>
                  </>
                )}
                {isError && (
                  <Text className="text-4xl text-center"> {errorMessage}</Text>
                )}
              </span>
              {isLoading && <Spinner className="h-16 w-16" />}
            </div>
          </div>
          <Button
            vairant="none"
            className="text-4xl text-c-gray text-bold font-vt323 cursor-pointer active:text-white"
            onClick={getDataHandler}
          >
            &#62;
          </Button>
        </div>
        <Socials />
      </div>
    </div>
  );
};
export default App;
const Socials = () => {
  return (
    <div className="w-full mt-10  flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button
        vairant="outline"
        as="a"
        href="https://www.facebook.com/Yuvraj.Srijal.Dahal/"
        target="_blank"
        className="text-sm lg:text-lg inline-flex justify-center items-center gap-4"
      >
        <BsFacebook className="md:text-2xl" />
        <span>yuvrajdahal</span>
      </Button>
      <Button
        vairant="outline"
        as="a"
        href="https://github.com/yuvrajdahal/"
        target="_blank"
        className="text-sm lg:text-lg inline-flex justify-center items-center gap-4"
      >
        <BsGithub className="md:text-2xl" />
        <span>yuvrajdahal</span>
      </Button>
      <Button
        vairant="outline"
        as="a"
        href="https://twitter.com/yuvrajdl"
        target="_blank"
        className="text-sm lg:text-lg inline-flex justify-center items-center gap-4"
      >
        <BsTwitter className="md:text-2xl" />
        <span>yuvrajdahal</span>
      </Button>
    </div>
  );
};
const LeftImage = () => {
  return (
    <div className="w-[40%] hidden md:block">
      <img className="w-full h-full object-cover" src="/assets/dog.png" />
    </div>
  );
};
