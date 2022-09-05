import { useGetElections } from "../hooks/useGetElections";
import { Loader } from "./Loader";

export const Elections = () => {
	const {results, loading} = useGetElections()
  
  if (loading) {
    return <Loader />;
  }
	
	return <>
	<div>Results</div>
	<div>
		{results.map((result) => (
			<div key={result._id}>
				<h3>Name: {result.candidate}</h3>
				<p>Votes: {result.votes}</p>
				<p>Party: {result.party}</p>
				<br />
			</div>
		))}
	</div>
	</>
}