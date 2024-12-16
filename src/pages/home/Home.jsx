import Banner from "./Banner.jsx";
import Category from "./Categoties";
import JoinDigest from "./JoinDigest";
import NFTs from "./NFTs";
import CallNowButton from "../../components/CallMe/Call.jsx";

import TopCreators from "./TopCreators.jsx";
import TrendingCollection from "./TrendConllection";
import Worlds from "./Works";

const Home = () => {
  return (
    <div>
      <Banner />
      <TrendingCollection />
      <Worlds />
      <TopCreators />
      <Category />
      <NFTs />
     
     
      <JoinDigest />
    </div>
  );
};

export default Home;
