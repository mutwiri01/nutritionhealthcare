import styled from 'styled-components'
import { FaSeedling, FaTags, FaWineBottle, FaTree, FaBan } from 'react-icons/fa'

const PageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
`

const Title = styled.h1`
  color: #4CAF50;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`

const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }
`

const IconWrapper = styled.div`
  background-color: #E8F5E9;
  color: #4CAF50;
  font-size: 2.5rem;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 1.5rem;
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`

const CardTitle = styled.h3`
  color: #2C3E50;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`

const CardDescription = styled.p`
  color: #7f8c8d;
  font-size: 1rem;
  line-height: 1.5;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
`

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  resize: vertical;
`

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`

const Projects = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }

  return (
    <PageContainer>
      <Title>Projects</Title>
      <CardContainer>
        <Card>
          <IconWrapper>
            <FaSeedling />
          </IconWrapper>
          <CardContent>
            <CardTitle>Organic Community</CardTitle>
            <CardDescription>Fostering local organic farming initiatives.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <IconWrapper>
            <FaTags />
          </IconWrapper>
          <CardContent>
            <CardTitle>Labeling for Nutritional Health</CardTitle>
            <CardDescription>Promoting clear and informative food labeling.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <IconWrapper>
            <FaWineBottle />
          </IconWrapper>
          <CardContent>
            <CardTitle>Beverages for Healthy Lives</CardTitle>
            <CardDescription>Encouraging the consumption of healthier beverages.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <IconWrapper>
            <FaTree />
          </IconWrapper>
          <CardContent>
            <CardTitle>Rebuilding Natural Ecosystems</CardTitle>
            <CardDescription>Restoring balance to our environment through sustainable practices.</CardDescription>
          </CardContent>
        </Card>
        <Card>
          <IconWrapper>
            <FaBan />
          </IconWrapper>
          <CardContent>
            <CardTitle>Lobby Against Harmful Food Additives</CardTitle>
            <CardDescription>Advocating for the removal of harmful substances from our food supply.</CardDescription>
          </CardContent>
        </Card>
      </CardContainer>
      
    </PageContainer>
  )
}

export default Projects
