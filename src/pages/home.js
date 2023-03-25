import gnome3 from '../media/gnome-3.png';
import seaside from '../media/bg-test-2.png';
import wanderer from '../media/wanderer-1.png';
import undrawCurrency from '../media/undraw_digital_currency_qpak.png';
import undrawGaming from '../media/undraw_Gaming_re_cma2.png';
import undrawProgressive from '../media/undraw_progressive_app_m9ms.png';
import undrawEarn from '../media/undraw_treasure_of9i.png';
export const Home = () => {
	return (
		<div>
			<div className="container">
				<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
					<div
						className="container-fluid px-auto"
						style={{ maxWidth: '1440px' }}
					>
						<a className="navbar-brand" href="#">
							Wandering King Studios
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarCollapse"
							aria-controls="navbarCollapse"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse float-right"
							id="navbarCollapse"
							style={{ justifyContent: 'flex-end' }}
						>
							<ul className="navbar-nav me-auto mb-2 mb-md-0 ">
								<li className="nav-item">
									<a
										className="nav-link active"
										aria-current="page"
										href="#home-anchor"
									>
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#about-anchor">
										About
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#afterlands-anchor">
										Afterlands
									</a>
								</li>
								<li className="nav-item">
									<a class="nav-link" href="#goals-anchor">
										Our Goals
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#gallery-anchor">
										Gallery
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>

			<h1 className="visually-hidden" id="home-anchor">
				Wandering King Studios
			</h1>
			<div className="background-image" id="cliffside-view"></div>
			<div className="container col-xxl-8 px-4 py-5" id="about-anchor">
				<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
					<div className="col-10 col-sm-8 col-lg-6">
						<img
							src={gnome3}
							className="d-block mx-lg-auto img-fluid display-image"
							alt="Bootstrap Themes"
							width="700"
							height="500"
							loading="lazy"
						/>
					</div>
					<div className="col-lg-6">
						<h1 className="display-5 fw-bold lh-1 mb-3">
							Unite, Thrive, Conquer
						</h1>
						<p className="lead">
							<h3>
								Crafting Immersive MMO Adventures for the Passionate Gamer
							</h3>
							Bringing together passionate storytellers with an eye for
							world-building and some of the most innovative game designers,
							we’ve been able to get the most out of our platform to bring some
							of the most exciting railless game play in the space. We intend to
							use the impact that’ll come of digital assets to expand our
							experience on a multitude of levels, in new and exciting fashions.
							Wandering King Studios looks forward to unveiling all the ways we
							aim to enrich the gaming experience for users like never before.
						</p>
					</div>
				</div>
			</div>

			<div className="background-image" id="chasm-view"></div>
			<div
				class="px-4 pt-5 my-5 text-center border-bottom"
				id="afterlands-anchor"
			>
				<h1 class="display-4 fw-bold">Where Magic Meets Mech</h1>
				<div class="col-lg-6 mx-auto">
					<p class="lead mb-4">
						Science warped by sorceress' and adventures driven by the need to
						survive. Afterlands is a dystopian landscape made all the more
						challenging by mutants, marauders and every kind of monster you can
						imagine; where players must forge alliances to not only survive but
						in order to thrive. The potential to leave a lasting footprint on
						the landscape is everywhere, with unending possibilities and
						limitless opportunities supporting them.
					</p>
				</div>
				<div class="overflow-hidden" style={{ maxHeight: '40vh' }}>
					<div class="container px-5">
						<img
							src={seaside}
							class="img-fluid border rounded-3 shadow-lg mb-4"
							alt="Example image"
							width="700"
							height="500"
							loading="lazy"
							style={{ borderRadius: '2rem' }}
						/>
					</div>
				</div>
			</div>
			<div className="b-example-divider"></div>

			<div className="container col-xxl-8 px-4 py-5" id="afterlands-anchor-2">
				<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
					<div className="col-10 col-sm-8 col-lg-6">
						<img
							src={wanderer}
							className="d-block mx-lg-auto img-fluid display-image"
							alt="Bootstrap Themes"
							width="700"
							height="500"
							loading="lazy"
						/>
					</div>
					<div className="col-lg-6">
						<h1 className="display-5 fw-bold lh-1 mb-3">
							Continue the Adventure
						</h1>
						<p className="lead">
							With a deep and still yet to be explored history and ever
							expanding lore, players will not only get to uncover countless
							stories, epics, and uncharted history but make it themselves in a
							meaningful way that will steer the gaming experience for everyone
							and allow for them to truly leave a mark on the game they love.
						</p>
					</div>
				</div>
			</div>
			<div className="background-image" id="workshop-view"></div>
			<div className="container col-xxl-8 px-4 py-5" id="goals-anchor">
				<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
					<div className="col-10 col-sm-8 col-lg-6">
						<div>
							<img
								src={undrawProgressive}
								className="d-block mx-lg-auto img-fluid "
								alt="Bootstrap Themes"
								width="700"
								height="500"
								loading="lazy"
							/>
						</div>
					</div>
					<div className="col-lg-6">
						<h2>Multi-Platform Development</h2>
						<p className="lead">
							PC, Consoles, mobile and web versions allow us to reach the
							majority of audiences during typical gaming scenarios (home, work,
							transport, waiting) while keeping the development costs low by
							using the most popular multi-platform game development engine -
							Unity3D.
						</p>
					</div>
				</div>
				<div className="row flex-lg-row align-items-center g-5 py-5">
					<div className="col-10 col-sm-8 col-lg-6">
						<div>
							<img
								src={undrawCurrency}
								className="d-block mx-lg-auto img-fluid "
								alt="Bootstrap Themes"
								width="700"
								height="500"
								loading="lazy"
							/>
						</div>
					</div>
					<div className="col-lg-6">
						<h2>Digital Assets</h2>
						<p className="lead">
							Merging digital assets and in-game purchases / p2p players
							marketplace is a huge opportunity. We are pioneering a web 2.5
							approach that allows us to take the best from both traditional
							online gaming and web 3 / blockchain gaming worlds.
						</p>
					</div>
				</div>
				<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
					<div className="col-10 col-sm-8 col-lg-6">
						<div>
							<img
								src={undrawEarn}
								className="d-block mx-lg-auto img-fluid "
								alt="Bootstrap Themes"
								width="700"
								height="500"
								loading="lazy"
							/>
						</div>
					</div>
					<div className="col-lg-6">
						<h2>Play to Earn</h2>
						<p className="lead">
							We are redefining the idea of play- to-earn, one of the
							fastest-growing trends in the gaming space, by adding transparent
							drop rates for critical in-game ultra-rare items.
						</p>
					</div>
				</div>
				<div className="row flex-lg-row align-items-center g-5 py-5">
					<div className="col-10 col-sm-8 col-lg-6">
						<div>
							<img
								src={undrawGaming}
								className="d-block mx-lg-auto img-fluid "
								alt="Bootstrap Themes"
								width="700"
								height="500"
								loading="lazy"
							/>
						</div>
					</div>
					<div className="col-lg-6">
						<h2>Survival MMORPG</h2>
						<p className="lead">
							Afterlands draws inspiration from two living classics: World of
							Warcraft and Valheim. Combining world-level storylines and complex
							RPG systems with sandbox freedom and real-time action, Afterlands
							brings a much needed gameplay experience to the market.
						</p>
					</div>
				</div>
			</div>
			<div className="background-image" id="cliffside-view-2"></div>
			<div className="container my-5" id="gallery-anchor">
				<div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg justify-content-center">
					<div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
						<h1 className="display-4 fw-bold lh-1">Gallery</h1>
					</div>
					<div
						id="wkCarousel"
						className="carousel slide w-100"
						data-ride="carousel"
					>
						<ol className="carousel-indicators">
							<li
								data-target="#wkCarousel"
								data-slide-to="0"
								className="active"
							></li>
							<li data-target="#wkCarousel" data-slide-to="1"></li>
							<li data-target="#wkCarousel" data-slide-to="3"></li>
							<li data-target="#wkCarousel" data-slide-to="4"></li>
							<li data-target="#wkCarousel" data-slide-to="5"></li>
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item active">
								<img
									className="d-block w-100"
									src={require('../media/wanderer-1.png')}
									alt="First slide"
								/>
							</div>
							<div className="carousel-item">
								<img
									className="d-block w-100"
									src={require('../media/dwarf-2.png')}
									alt="Second slide"
								/>
							</div>
							<div className="carousel-item">
								<img
									className="d-block w-100"
									src={require('../media/gnome-2.png')}
									alt="Third slide"
								/>
							</div>
							<div className="carousel-item">
								<img
									className="d-block w-100"
									src={require('../media/dwarf-1.png')}
									alt="Fourth slide"
								/>
							</div>
							<div className="carousel-item">
								<img
									className="d-block w-100"
									src={require('../media/gnome-1.png')}
									alt="Fifth slide"
								/>
							</div>
						</div>
						<a
							className="carousel-control-prev "
							href="#wkCarousel"
							role="button"
							data-slide="prev"
						>
							<span
								className="carousel-control-prev-icon "
								aria-hidden="true"
							></span>
							<span className="sr-only">Previous</span>
						</a>
						<a
							className="carousel-control-next"
							href="#wkCarousel"
							role="button"
							data-slide="next"
						>
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
			</div>

			<div class="container-fluid bg-dark h-100 ">
				<footer class="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
					<p class="col-md-4 mb-0 text-light">
						&copy; 2023 Wandering King Studios
					</p>

					<a
						href="/"
						class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
					></a>

					<ul class="nav col-md-4 justify-content-end">
						<li class="nav-item">
							<a href="#home-anchor" class="nav-link px-2 text-light">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a href="#about-anchor" class="nav-link px-2 text-light">
								About
							</a>
						</li>
						<li class="nav-item">
							<a href="#afterlands-anchor" class="nav-link px-2 text-light">
								Afterlands
							</a>
						</li>
						<li class="nav-item">
							<a href="#goals-anchor" class="nav-link px-2 text-light">
								Our Goals
							</a>
						</li>
						<li class="nav-item">
							<a href="#gallery-anchor" class="nav-link px-2 text-light">
								Gallery
							</a>
						</li>
					</ul>
				</footer>
			</div>
		</div>
	);
};
