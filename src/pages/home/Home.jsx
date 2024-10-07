import Banner from "./Banner.jsx";
import Category from "./Categoties";
import JoinDigest from "./JoinDigest";
import NFTs from "./NFTs";
import TimeEvent from "./TimeEvent";
import TopCreators from "./TopCreators.jsx";
import TrendingCollection from "./TrendConllection";
import Worlds from "./Works";

const Home = () => {
  return (
    <div>
      <Banner />
      <TrendingCollection />
      <TopCreators />
      <Category />
      <NFTs />
      <TimeEvent />
      <Worlds />
      <JoinDigest />
    </div>
  );
};

export default Home;
