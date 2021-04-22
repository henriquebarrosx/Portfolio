import styled from 'styled-components';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  border-radius: 6px;
  align-items: center;
	margin: 84px 0 220px;
  flex-direction: column;
  justify-content: center;
`

export const WorkContainer = styled.div`
  gap: 100px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  
  padding: 0 50px;
  max-width: 1600px;
  justify-content: center;
`

export const TechContainer = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const TechLabel = styled.span`
  margin: 10px 0;
  color: #666371;
`