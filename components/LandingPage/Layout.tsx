import Header from "./Partial/Header"
import Footer from "./Partial/Footer"
import Navbar from "./Partial/Navbar"
import React from "react"
import styles from '../../styles/Partial.module.css'
import type { NextPage } from 'next'

type Props = {
    children: any
}


const Layout: NextPage<Props> = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <div className={styles.layout_main}>
                <Navbar />
                {children}
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Layout 