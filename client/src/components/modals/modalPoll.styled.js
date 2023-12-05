import styled from 'styled-components';

import { Modal } from 'react-bootstrap';

export const CustomModal = styled(Modal)`
  .modal-content {
    background: #04395E; 
    color: white;
    
  }
  .modal-title{
    align-items: center;
    margin: 0 auto;
    font-weight: 700;
    font-size: 40px;
    
  }
  .btn-close{
    margin-left: auto;
    background-color: #fff;
    color: #04395E;
    opacity: 1;
  }
  .modal-header{
    border-bottom: none;
  }
  .btn {
    background-color: #fff;
    color: #04395E;
    opacity: 1;
    border: none;
    font-weight: 600;
    font-size: 24px;
    margin: 0 auto;
  }
  .modal-footer{
    border-top: none;
  }
  #pollAnswers{
    border-top: 5px solid #FF1F66;
    ;
    margin-top: 20px;
  }
  #pollTitle{
    border-top: 5px solid #FF1F66;
  }
`;