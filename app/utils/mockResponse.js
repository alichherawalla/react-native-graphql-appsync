import uuid from 'uuid'
export const employeeData = [
  {
    id: uuid(),
    firstname: 'MACTESTER',
    lastname: 'Doe'
  },
  {
    id: 2,
    firstname: 'Jonathan',
    lastname: 'Doe',
    address: [
      {
        line1: '3022 Dauphine',
        line2: 'St Ste A',
        city: 'New Orleans',
        state: 'LA',
        zipcode: '70117'
      },
      {
        line1: '3024 Dauphine',
        line2: 'St Ste A',
        city: 'New Orleans',
        state: 'LA',
        zipcode: '70117'
      },
      {
        line1: '3026 Dauphine',
        line2: 'St Ste A',
        city: 'New Orleans',
        state: 'LA',
        zipcode: '70117'
      },
      {
        line1: '3028 Dauphine',
        line2: 'St Ste A',
        city: 'New Orleans',
        state: 'LA',
        zipcode: '70117'
      }
    ],
    skills: [{ id: 6, name: 'Senior Electrician' }]
  },
  {
    id: 3,
    firstname: 'Steve',
    lastname: 'Doe',
    address: [
      {
        line1: '3028 Dauphine',
        line2: 'St Ste A',
        city: 'New Orleans',
        state: 'LA',
        zipcode: '70117'
      }
    ],
    skills: [
      { id: 4, name: 'Senior Technician' },
      { id: 5, name: 'Senior Plumber' }
    ]
  },
  {
    id: 4,
    firstname: 'Nathan',
    lastname: 'Doe',
    address: [
      {
        line1: '3022 Dauphine',
        line2: 'St Ste A',
        city: 'New Orleans',
        state: 'LA',
        zipcode: '70117'
      },
      {
        line1: '3024 Dauphine',
        line2: 'St Ste A',
        city: 'New Orleans',
        state: 'LA',
        zipcode: '70117'
      },
      {
        line1: '3026 Dauphine',
        line2: 'St Ste A',
        city: 'New Orleans',
        state: 'LA',
        zipcode: '70117'
      }
    ],
    skills: [
      { id: 4, name: 'Senior Technician' },
      { id: 5, name: 'Senior Plumber' },
      { id: 6, name: 'Senior Electrician' }
    ]
  },
  {
    id: 5,
    firstname: 'Albert',
    lastname: 'Doe',
    address: [
      {
        line1: '3022 Dauphine',
        line2: 'St Ste A',
        city: 'New Orleans',
        state: 'LA',
        zipcode: '70117'
      },
      {
        line1: '3024 Dauphine',
        line2: 'St Ste A',
        city: 'New Orleans',
        state: 'LA',
        zipcode: '70117'
      },
      {
        line1: '3026 Dauphine',
        line2: 'St Ste A',
        city: 'New Orleans',
        state: 'LA',
        zipcode: '70117'
      },
      {
        line1: '3028 Dauphine',
        line2: 'St Ste A',
        city: 'New Orleans',
        state: 'LA',
        zipcode: '70117'
      }
    ],
    skills: [
      { id: 4, name: 'Senior Technician' },
      { id: 5, name: 'Senior Plumber' },
      { id: 6, name: 'Senior Electrician' }
    ]
  }
]
