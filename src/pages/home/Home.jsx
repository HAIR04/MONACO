import Banner from "./Banner.jsx";
import Category from "./Categoties";
import JoinDigest from "./JoinDigest";
import NFTs from "./NFTs";
import CallNowButton from "../../components/call/Call.jsx";

import TopCreators from "./TopCreators.jsx";
import TrendingCollection from "./TrendConllection";
import Worlds from "./Works";

const Home = () => {
  return (
    <div className="mt-36 lg:mt-0">
      <Banner />
      <TrendingCollection />
      {/* <Worlds /> */}
      {/* <TopCreators /> */}
      {/* <Category /> */}
      {/* <NFTs /> */}

      <JoinDigest />
    </div>
  );
};

export default Home;
