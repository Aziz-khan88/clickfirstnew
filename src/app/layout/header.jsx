"use client";
import { useState, useEffect } from 'react';
import styles from "@/styles/layout/header.module.scss"
import { Col, Container, Row } from 'react-bootstrap'
import { ClickFirstLogo, NavIcon } from '@/src/app/app-constants'
import Link from 'next/link'
import Navigation from './navigation'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <section className={`${styles.headerMain} ${scrolled ? styles.active : ''}`}>
            <Container className="h-100">
                <Row className="h-100">
                    <Col xxl={3} xl={3} lg={3} md={6} xs={6} className="my-auto">
                        <div className={styles.logoMain}>
                            <Link href={"/"}>
                                <ClickFirstLogo />
                            </Link>
                        </div>
                    </Col>
                    <Col xxl={9} xl={9} lg={9} md={6} xs={6} className="my-auto">
                        <Navigation />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Header