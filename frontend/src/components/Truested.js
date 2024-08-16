import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 5+ Companies</h3>
        <div className="brand-section-slider">
          <div className="slide samsung">Samsung</div>
          <div className="slide nokia">Nokia</div>
          <div className="slide dell">Dell</div>
          <div className="slide iwatch">iWatch</div>
          <div className="slide iphone">iPhone</div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .brand-section-slider {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    text-align: center;
  }

  .slide {
    font-size: 1.8rem;
    font-weight: 700;
    padding: 10px 20px;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-width: 120px;
  }

  .slide:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  /* Different background colors for each company */
  .samsung {
    background: linear-gradient(135deg, #1e3c72, #2a5298);
  }

  .nokia {
    background: linear-gradient(135deg, #007bff, #00c6ff);
  }

  .dell {
    background: linear-gradient(135deg, #009688, #4caf50);
  }

  .iwatch {
    background: linear-gradient(135deg, #8e44ad, #c0392b);
  }

  .iphone {
    background: linear-gradient(135deg, #e74c3c, #e67e22);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      flex-direction: column;
      gap: 1rem;
    }

    .slide {
      font-size: 1.5rem;
      padding: 8px 16px;
      min-width: 100px;
    }
  }
`;

export default Trusted;
