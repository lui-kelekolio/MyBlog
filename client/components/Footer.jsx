import React from 'react'

class Footer extends React.Component {
    constructor() {
        super()

        this.state = {}
    }


    render() {
        return (
            <>
                <main>
                <div className="footer-container">
                        <div className="blurb-headline"></div>
                        <br />
                        <div className="blurb-text"><p>This helps explain what we meant in the previous section when we said that racket provides require and the function-calling syntax. Libraries are not restricted to exporting values, such as functions; they can also define new syntactic forms.<br></br><br></br> In this sense, Racket isn’t exactly a language at all; it’s more of an idea for how to structure a language so that you can extend it or create entirely new languages.</p>

                        </div>
                    </div>

                </main>

            </>
        )
    }



}




export default Footer