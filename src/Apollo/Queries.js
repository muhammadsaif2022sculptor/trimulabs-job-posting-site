import { gql, useQuery } from "@apollo/client";

// Custom hook to get all the jobs
export const useGetAllJobs = () => {

  /** 
   * reference https://www.apollographql.com/docs/react/data/queries
   * Query to get all the jobs
  */
  const GET_JOBS = gql`
  query {
      jobs{
          id
          title
          slug
          company {
            id
            name
            slug
          }
          userEmail
          description
          isPublished
          applyUrl
      }
  }`;
  return useQuery(GET_JOBS)
}

// custom hook to fetch single job
export const useGetJob = (companySlug, jobSlug) => {
  const GET_JOB = gql`
  query {
    job(input: {
      companySlug: "${companySlug}"
      jobSlug: "${jobSlug}"
    }){
      id,
      title
      slug
      commitment {
        title
      }
      cities {
        id
        name
      }
      remotes {
        id
        name
      }
      applyUrl
      company{
        name
        websiteUrl
      }
      tags{
        id
        name
      }
      isPublished
      isFeatured
      userEmail
      postedAt
      updatedAt 
      description
    }
  }`;

  return useQuery(GET_JOB)
}


