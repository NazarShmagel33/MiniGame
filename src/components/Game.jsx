import React, { useState } from 'react'

const MatchGame = () => {
    const [matches, setMatches] = useState(25)
    const [userTurn, setUserTurn] = useState(true)
    const [winner, setWinner] = useState('')

    const handleMatchSelection = (count) => {
        if (matches <= 0 || !userTurn) return

        const remainingMatches = matches - count
        setMatches(remainingMatches)

        if (remainingMatches <= 0) {
            setWinner(userTurn ? 'User' : 'AI')
        } else {
            setUserTurn(false)
            setTimeout(() => {
                const aiCount = calculateOptimalAIMatchCount(remainingMatches)
                const aiRemainingMatches = remainingMatches - aiCount
                setMatches(aiRemainingMatches)
                setUserTurn(true)

                if (aiRemainingMatches <= 0) {
                    setWinner(userTurn ? 'User' : 'AI')
                }
            }, 800)
        }
    }

    const calculateOptimalAIMatchCount = (remainingMatches) => {
        // AI logic to determine the optimal number of matches to take
        // In this case, the AI will try to leave an odd number of matches for the user
        const optimalCount = remainingMatches % 2 === 0 ? 1 : 2
        return Math.min(optimalCount, remainingMatches)
    }

    return (
        <div className="container mx-auto text-center">
            <h1 className="mt-14 text-2xl font-bold uppercase">Match Game</h1>
            <p className="mt-7 text-xl  font-medium ">
                Remaining Matches: {matches}
            </p>
            {winner ? (
                <h2 className="flex  justify-center  p-2 text-center text-2xl font-semibold text-black">
                    Winner: {winner}
                </h2>
            ) : (
                <>
                    <p className="my-4 text-xl">
                        {userTurn ? 'Your Turn' : "AI's Turn"}
                    </p>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => handleMatchSelection(1)}
                            className="rounded-md bg-slate-500 p-2 font-medium uppercase text-white"
                        >
                            1 match
                        </button>
                        <button
                            onClick={() => handleMatchSelection(2)}
                            className="rounded-md bg-slate-500 p-2 font-medium uppercase text-white"
                        >
                            2 matches
                        </button>
                        <button
                            onClick={() => handleMatchSelection(3)}
                            className="rounded-md bg-slate-500 p-2 font-medium uppercase text-white"
                        >
                            3 matches
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default MatchGame
