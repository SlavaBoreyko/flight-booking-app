import { SkeletonCard } from "@/components/shared/SkeletonCard";
import { StyledCard, StyledList } from "./styles";

const SkeletonList = () => {
  const tenItems = Array.from(Array(10).keys());
  return (
    <StyledList>
      <StyledCard>
        <SkeletonCard marginTop="1rem" height="3rem" />
        {tenItems.map((item) => (
          <SkeletonCard key={item} marginTop="2rem" height="14rem" />
        ))}
      </StyledCard>
    </StyledList>
  );
};

export default SkeletonList;
