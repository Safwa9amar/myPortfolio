import { Progress } from "../../components/all_in_one";
import { useInView } from "react-intersection-observer";

const PropgresSkillsData = function (data) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,

  });
  return data.map((el) => {
    return (
      <Progress value={el.precent} key={el.id} ref={ref} activeView={inView}>
        <span>{el.name}</span>
        <span>{el.precent}%</span>
      </Progress>
    );
  });
};

export default PropgresSkillsData;
