import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, SideBar } from '../../components';
import axios from 'axios';

export default function DetailPengmasMandiriAdmin() {
	let nomor = window.location.pathname.split('/');
	console.log(nomor[3]);
	// const { id } = useParams();

	const [showDetailDataPengmas, setShowDetailDataPengmas] = useState({});
	const [loading, setLoading] = useState(true);

	const getDetailbyID = (id) => {
		console.log(nomor[3]);
		axios({
			method: 'post',
			url:
				'https://project.mis.pens.ac.id/mis116/sipengmas/api/datapengmas.php?function=showDataPengmasbyMandiri',
			data: { ID_detailDataPengmas: parseInt(nomor[4]) },
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			},
		}).then((result) => {
			console.log(result.data.data);
			setShowDetailDataPengmas(result.data.data[0]);
			setLoading(false);
		});
	};

	useEffect(() => {
		getDetailbyID();
	}, []);

	return (
		<div className='app'>
			<Header />
			<SideBar />
			<div class='main-content'>
				<section class='section'>
					<div class='section-header'>
						<h1>Detail Data</h1>
						<div class='section-header-breadcrumb'>
							<div class='breadcrumb-item active'>Data Pengmas</div>
							<div class='breadcrumb-item'>Detail Data</div>
						</div>
					</div>

					<div class='section-body'>
						<div class='card'>
							<div class='card-body'>
								<div class='row'>
									<div class='col-4 col-md-2'>Judul</div>
									<div class='col-8 col-md-10'>
										: {showDetailDataPengmas.JUDUL}
									</div>
								</div>
								<div class='row'>
									<div class='col-4 col-md-2'>Nama Pegawai</div>
									<div class='col-8 col-md-10'>
										: {showDetailDataPengmas.NAMA_PEGAWAI}
									</div>
								</div>
								<div class='row'>
									<div class='col-4 col-md-2'>Kategori</div>
									<div class='col-8 col-md-10'>
										: {showDetailDataPengmas.KATEGORI}
									</div>
								</div>
								<div class='row'>
									<div class='col-4 col-md-2'>Peran</div>
									<div class='col-8 col-md-10'>
										: {showDetailDataPengmas.PERAN}
									</div>
								</div>
								<div class='row'>
									<div class='col-4 col-md-2'>Tahun Pelaksanaan</div>
									<div class='col-8 col-md-10'>
										: {showDetailDataPengmas.TAHUN_PELAKSANAAN}
									</div>
								</div>
								<div class='row'>
									<div class='col-4 col-md-2'>Rangkuman Kegiatan</div>
									<div class='col-8 col-md-10'>
										: {showDetailDataPengmas.KETERANGAN}
									</div>
								</div>
								{/* <div class='row'>
									<div class='col-4 col-md-2'>Dokumentasi</div>
									<div class='col-8 col-md-10'>
										: {showDetailDataPengmas.DOKUMENTASI}
									</div>
								</div> */}
								{/* <div class='row'>
									<div class='col-4 col-md-2'></div>
									<div class='col-8 col-md-10 buttons'>
										<Link to='/admin/detaildataprodi' class='btn btn-warning'>
											Unduh File
										</Link>
										<Link to='/admin/detaildataprodi' class='btn btn-warning'>
											Unduh SK
										</Link>
									</div>
								</div> */}
								{/* <div class='row'>
									<div class='col-4 col-md-2'></div>
									<div class='col-8 col-md-10 buttons'>
										<Link to='/admin/dataprodi' class='btn btn-info'>
											Kembali
										</Link>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
