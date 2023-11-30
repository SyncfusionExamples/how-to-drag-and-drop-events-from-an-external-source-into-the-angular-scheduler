export let hospitalData: Record<string, any>[] = [
    {
      Id: 1,
      Subject: 'David',
      StartTime: new Date(2023, 9, 24, 9, 0),
      EndTime: new Date(2023, 9, 24, 10, 0),
      Description: 'Health Checkup',
      DepartmentName: 'GENERAL'
    }, {
      Id: 2,
      Subject: 'John',
      StartTime: new Date(2023, 9, 23, 10, 30),
      EndTime: new Date(2023, 9, 23, 11, 30),
      Description: 'Tooth Erosion',
      DepartmentName: 'DENTAL'
    }, {
      Id: 3,
      Subject: 'Peter',
      StartTime: new Date(2023, 9, 23, 12, 0),
      EndTime: new Date(2023, 9, 23, 13, 0),
      Description: 'Eye and Spectacles Checkup',
      DepartmentName: 'GENERAL'
    }];
  
  export let waitingList: Record<string, any>[] = [
    {
      Id: 1,
      Name: 'Steven',
      StartTime: new Date(2021, 8, 4, 7, 30),
      EndTime: new Date(2021, 8, 4, 9, 30),
      Description: 'Consulting',
      DepartmentName: 'GENERAL'
    },
    {
      Id: 2,
      Name: 'Milan',
      StartTime: new Date(2021, 8, 5, 8, 30),
      EndTime: new Date(2021, 8, 5, 10, 30),
      Description: 'Bad Breath',
      DepartmentName: 'DENTAL'
    },
    {
      Id: 3,
      Name: 'Laura',
      StartTime: new Date(2021, 8, 5, 9, 30),
      EndTime: new Date(2021, 8, 5, 10, 30),
      Description: 'Eye Checkup',
      DepartmentName: 'GENERAL'
    },
    {
      Id: 4,
      Name: 'Janet',
      StartTime: new Date(2021, 8, 4, 11, 0),
      EndTime: new Date(2021, 8, 4, 12, 30),
      Description: 'Gum Disease',
      DepartmentName: 'DENTAL'
    },
    {
      Id: 5,
      Name: 'Adams',
      StartTime: new Date(2021, 8, 4, 11, 0),
      EndTime: new Date(2021, 8, 4, 12, 30),
      Description: 'Observation',
      DepartmentName: 'GENERAL'
    },
    {
      Id: 6,
      Name: 'John',
      StartTime: new Date(2021, 8, 4, 11, 0),
      EndTime: new Date(2021, 8, 4, 12, 30),
      Description: 'Mouth Sores',
      DepartmentName: 'DENTAL'
    }
  ];