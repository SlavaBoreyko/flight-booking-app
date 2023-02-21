import s from "./SkeletonList.module.scss";
import { SkeletonCard } from "@/components/shared/SkeletonCard";

const SkeletonList = () => {
  const tenItems = Array.from(Array(10).keys());
  return (
    <div className={s.listContainer}>
      <div className={s.sceletonCard}>
        <SkeletonCard marginTop="1rem" height="3rem" />
        {tenItems.map((item) => (
          <SkeletonCard key={item} marginTop="2rem" height="14rem" />
        ))}
      </div>
    </div>
  );
};

export default SkeletonList;
