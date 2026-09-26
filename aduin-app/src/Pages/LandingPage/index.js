import React from 'react';

import {
  Home,
  FileText,
  ClipboardCheck,
  History,
  Info,
  UserCircle,
  PenLine,
  Search,
  Map,
  MapPin
} from "lucide-react";

// import gambar, icon
import logo from "../../Assets/aduin-favicon.png";
import banner from "../../Assets/banner.jpg";

import "../../Styles/LandingPage/LandingPage.css";


const LandingPage = () => {

    return (

        <div className="landingpage">

            {/* =====================================================
                NAVBAR
            ====================================================== */}

            <nav className="navbar">

                {/* Logo */}
                <div className="navbar-logo">

                    <div className="logo-icon">
                        <img
                            src={logo}
                            alt="ADUIN"
                            className="logo"
                        />
                    </div>

                    <div className="logo-text">
                        <h2>ADUIN</h2>
                        <p>ADUAN INFRASTRUKTUR</p>
                    </div>

                </div>


                {/* Navigation */}
                <div className="navbar-menu">

                    <a href="#beranda" className="nav-link active">
                        <Home size={16} />
                        <span>Beranda</span>
                    </a>

                    <a href="#pengaduan" className="nav-link">
                        <FileText size={16} />
                        <span>Buat Pengaduan</span>
                    </a>

                    <a href="#status" className="nav-link">
                        <ClipboardCheck size={16} />
                        <span>Cek Status</span>
                    </a>

                    <a href="#riwayat" className="nav-link">
                        <History size={16} />
                        <span>Riwayat</span>
                    </a>

                    <a href="#informasi" className="nav-link">
                        <Info size={16} />
                        <span>Informasi</span>
                    </a>

                    {/* Login */}
                    <a href="#login" className="login-button">
                        <UserCircle size={20} />
                        <span>Masuk / Daftar</span>
                    </a>

                </div>

            </nav>


            {/* =====================================================
                banner SECTION
            ====================================================== */}

            <section className="banner-section">

                <div
                    className="banner-background"
                    style={{
                        backgroundImage: `url(${banner})`
                    }}
                >

                    <div className="banner-overlay"></div>

                    <div className="banner-content">

                        <h1>
                            Bersama Kita Wujudkan
                            <br />
                            Lingkungan yang Lebih Baik
                        </h1>

                        <p>
                            Laporkan permasalahan infrastruktur lingkungan
                            di sekitar Anda
                            <br />
                            secara mudah, cepat dan transparan.
                        </p>

                    </div>

                </div>


                {/* =================================================
                    QUICK MENU
                ================================================== */}

                <div className="quick-menu">


                    {/* Buat Pengaduan */}
                    <a
                        href="#pengaduan"
                        className="quick-menu-item"
                    >

                        <div className="quick-icon blue">
                            <PenLine size={32} />
                        </div>

                        <h3>
                            Buat Pengaduan
                        </h3>

                        <p>
                            Laporkan masalah infrastruktur
                            lingkungan secara online
                        </p>

                    </a>


                    {/* Cek Status */}
                    <a
                        href="#status"
                        className="quick-menu-item"
                    >

                        <div className="quick-icon green">
                            <Search size={32} />
                        </div>

                        <h3>
                            Cek Status
                        </h3>

                        <p>
                            Pantau perkembangan
                            laporan Anda
                        </p>

                    </a>


                    {/* Riwayat */}
                    <a
                        href="#riwayat"
                        className="quick-menu-item"
                    >

                        <div className="quick-icon orange">
                            <History size={32} />
                        </div>

                        <h3>
                            Riwayat Laporan
                        </h3>

                        <p>
                            Lihat semua laporan
                            yang pernah Anda buat
                        </p>

                    </a>


                    {/* Informasi */}
                    <a
                        href="#informasi"
                        className="quick-menu-item"
                    >

                        <div className="quick-icon purple">
                            <Info size={32} />
                        </div>

                        <h3>
                            Informasi Pelayanan
                        </h3>

                        <p>
                            Panduan dan informasi
                            layanan pengaduan
                        </p>

                    </a>


                    {/* Peta */}
                    <a
                        href="#peta"
                        className="quick-menu-item"
                    >

                        <div className="quick-icon red">
                            <MapPin size={32} />
                        </div>

                        <h3>
                            Peta Pengaduan
                        </h3>

                        <p>
                            Lihat sebaran pengaduan
                            pada peta
                        </p>

                    </a>

                </div>

            </section>

        </div>
    );
};

export default LandingPage;