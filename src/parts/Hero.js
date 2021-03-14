import React from "react";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
// import IconCalendar from "assets/images/icons/icon-calendar.svg";
import IconStar from "assets/images/icons/star.svg";
import Button from "elements/Button";

export default function Hero(props) {
	function showMostPicked() {
		window.scrollTo({
			top: props.refMostPicked.current.offsetTop - 30,
			behavior: "smooth",
		});
	}
	return (
		<section className="container pt-4">
			<div className="row align-items-center">
				<div className="col-auto pr-5" style={{ width: 530 }}>
					<h1 className="h2 font-weight-bold line-height-1 mb-3">
						Forget Busy Work, <br />
						Start Next Vacation
					</h1>
					<p className="mb-5 font-weight-light text-gray-500 w-75">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
						tenetur libero dolorem perferendis, iste praesentium ullam, dolore
						laborum reiciendis, deleniti tempore. Officiis reiciendis nostrum
						enim. Eum vitae sit itaque eos.
					</p>
					<Button
						className="btn px-5"
						hasShadow
						isPrimary
						onClick={showMostPicked}
					>
						Show Me Now
					</Button>
					<div className="row mt-5">
						<div className="col-auto" style={{ marginRight: 35 }}>
							<img
								width="36"
								height="36"
								src={IconStar}
								alt={`${props.data.travelers} Travelers`}
							/>
							<h6 className="mt-3">
								{props.data.travelers}{" "}
								<span className="text-gray-500 font-light">Travelers</span>
							</h6>
						</div>
						<div className="col-auto" style={{ marginRight: 35 }}>
							<img
								width="36"
								height="36"
								src={IconStar}
								alt={`${props.data.treasures} Treasures`}
							/>
							<h6 className="mt-3">
								{props.data.treasures}{" "}
								<span className="text-gray-500 font-light">Treasures</span>
							</h6>
						</div>
						<div className="col-auto">
							<img
								width="36"
								height="36"
								src={IconStar}
								alt={`${props.data.cities} Cities`}
							/>
							<h6 className="mt-3">
								{props.data.cities}{" "}
								<span className="text-gray-500 font-light">Cities</span>
							</h6>
						</div>
					</div>
				</div>
				<div className="col-6 pl-5">
					<div style={{ width: 520, height: 410 }}>
						<img
							src={ImageHero}
							alt="Room with couches"
							className="img-fluid position-absolute"
							style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
						/>
						<img
							src={ImageHeroFrame}
							alt="Room with couches frame"
							className="img-fluid position-absolute"
							style={{ margin: "0 -15px -15px 0" }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}