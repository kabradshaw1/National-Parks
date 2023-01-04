import Reach, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { SAVE_PARK } from '../../utils/mutations';

const ParkForm = (event) => {

  return (
    <>
    <form 
      className="flex-row justify-center justify-space-between-md align-stretch"
      onSubmit={handleFormSubmit}
    >
      
    </form>
    </>
  )
}