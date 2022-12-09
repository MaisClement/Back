import React from 'react';

import error from './assets/img/error_small.png';
import valid from './assets/img/valid_small.png';
import work from './assets/img/work_small.png';
import warning from './assets/img/warning_small.png';
import futureWork from './assets/img/futur_work_small.png';
import interogation from './assets/img/interogation_small.png';
import information from './assets/img/information_small.png';

import RER_A from './assets/img/idfm/lines_small_dark/RER_A.png';
import RER_B from './assets/img/idfm/lines_small_dark/RER_B.png';
import RER_C from './assets/img/idfm/lines_small_dark/RER_C.png';
import RER_D from './assets/img/idfm/lines_small_dark/RER_D.png';
import RER_E from './assets/img/idfm/lines_small_dark/RER_E.png';
import TRAIN_H from './assets/img/idfm/lines_small_dark/TRAIN_H.png';
import TRAIN_J from './assets/img/idfm/lines_small_dark/TRAIN_J.png';
import TRAIN_K from './assets/img/idfm/lines_small_dark/TRAIN_K.png';
import TRAIN_L from './assets/img/idfm/lines_small_dark/TRAIN_L.png';
import TRAIN_N from './assets/img/idfm/lines_small_dark/TRAIN_N.png';
import TRAIN_P from './assets/img/idfm/lines_small_dark/TRAIN_P.png';
import TRAIN_R from './assets/img/idfm/lines_small_dark/TRAIN_R.png';
import TRAIN_U from './assets/img/idfm/lines_small_dark/TRAIN_U.png';
import TRAM_1 from './assets/img/idfm/lines_small_dark/TRAM_1.png';
import TRAM_2 from './assets/img/idfm/lines_small_dark/TRAM_2.png';
import TRAM_3A from './assets/img/idfm/lines_small_dark/TRAM_3A.png';
import TRAM_3B from './assets/img/idfm/lines_small_dark/TRAM_3B.png';
import TRAM_4 from './assets/img/idfm/lines_small_dark/TRAM_4.png';
import TRAM_5 from './assets/img/idfm/lines_small_dark/TRAM_5.png';
import TRAM_6 from './assets/img/idfm/lines_small_dark/TRAM_6.png';
import TRAM_7 from './assets/img/idfm/lines_small_dark/TRAM_7.png';
import TRAM_8 from './assets/img/idfm/lines_small_dark/TRAM_8.png';
import TRAM_9 from './assets/img/idfm/lines_small_dark/TRAM_9.png';
import TRAM_10 from './assets/img/idfm/lines_small_dark/TRAM_10.png';
import TRAM_11 from './assets/img/idfm/lines_small_dark/TRAM_11.png';
import TRAM_12 from './assets/img/idfm/lines_small_dark/TRAM_12.png';
import TRAM_13 from './assets/img/idfm/lines_small_dark/TRAM_13.png';
import METRO_1 from './assets/img/idfm/lines_small_dark/METRO_1.png';
import METRO_2 from './assets/img/idfm/lines_small_dark/METRO_2.png';
import METRO_3 from './assets/img/idfm/lines_small_dark/METRO_3.png';
import METRO_3B from './assets/img/idfm/lines_small_dark/METRO_3B.png';
import METRO_4 from './assets/img/idfm/lines_small_dark/METRO_4.png';
import METRO_5 from './assets/img/idfm/lines_small_dark/METRO_5.png';
import METRO_6 from './assets/img/idfm/lines_small_dark/METRO_6.png';
import METRO_7 from './assets/img/idfm/lines_small_dark/METRO_7.png';
import METRO_7B from './assets/img/idfm/lines_small_dark/METRO_7B.png';
import METRO_8 from './assets/img/idfm/lines_small_dark/METRO_8.png';
import METRO_9 from './assets/img/idfm/lines_small_dark/METRO_9.png';
import METRO_10 from './assets/img/idfm/lines_small_dark/METRO_10.png';
import METRO_11 from './assets/img/idfm/lines_small_dark/METRO_11.png';
import METRO_12 from './assets/img/idfm/lines_small_dark/METRO_12.png';
import METRO_13 from './assets/img/idfm/lines_small_dark/METRO_13.png';
import METRO_14 from './assets/img/idfm/lines_small_dark/METRO_14.png';
import METRO_15 from './assets/img/idfm/lines_small_dark/METRO_15.png';
import METRO_16 from './assets/img/idfm/lines_small_dark/METRO_16.png';
import METRO_17 from './assets/img/idfm/lines_small_dark/METRO_17.png';
import METRO_18 from './assets/img/idfm/lines_small_dark/METRO_18.png';

class Trafic extends React.Component {
	render() {
		return (
			<div className="Trafic">
				<div>
					<SNCF_trafic line={'C01742'} name={'RER A'} img={RER_A} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01743'} name={'RER B'} img={RER_B} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01727'} name={'RER C'} img={RER_C} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01728'} name={'RER D'} img={RER_D} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01729'} name={'RER E'} img={RER_E} trafics={this.props.trafic} />
				</div>
				<div>
					<SNCF_trafic line={'C01371'} name={'METRO 1'} img={METRO_1} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01372'} name={'METRO 2'} img={METRO_2} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01373'} name={'METRO 3'} img={METRO_3} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01386'} name={'METRO 3B'} img={METRO_3B} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01374'} name={'METRO 4'} img={METRO_4} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01375'} name={'METRO 5'} img={METRO_5} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01376'} name={'METRO 6'} img={METRO_6} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01377'} name={'METRO 7'} img={METRO_7} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01387'} name={'METRO 7B'} img={METRO_7B} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01378'} name={'METRO 8'} img={METRO_8} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01379'} name={'METRO 9'} img={METRO_9} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01380'} name={'METRO 10'} img={METRO_10} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01381'} name={'METRO 11'} img={METRO_11} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01382'} name={'METRO 12'} img={METRO_12} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01383'} name={'METRO 13'} img={METRO_13} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01384'} name={'METRO 14'} img={METRO_14} trafics={this.props.trafic} />
				</div>
				<div>
					<SNCF_trafic line={'C01389'} name={'T1'} img={TRAM_1} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01390'} name={'T2'} img={TRAM_2} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01391'} name={'T3A'} img={TRAM_3A} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01679'} name={'T3B'} img={TRAM_3B} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01843'} name={'T4'} img={TRAM_4} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01684'} name={'T5'} img={TRAM_5} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01794'} name={'T6'} img={TRAM_6} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01774'} name={'T7'} img={TRAM_7} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01795'} name={'T8'} img={TRAM_8} trafics={this.props.trafic} />
					<SNCF_trafic line={'C02317'} name={'T9'} img={TRAM_9} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01999'} name={'T11'} img={TRAM_11} trafics={this.props.trafic} />
					<SNCF_trafic line={'C02344'} name={'T13'} img={TRAM_13} trafics={this.props.trafic} />
				</div>
				<div>
					<SNCF_trafic line={'C01737'} name={'TRANSILIEN H'} img={TRAIN_H} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01739'} name={'TRANSILIEN J'} img={TRAIN_J} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01738'} name={'TRANSILIEN K'} img={TRAIN_K} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01740'} name={'TRANSILIEN L'} img={TRAIN_L} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01736'} name={'TRANSILIEN N'} img={TRAIN_N} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01730'} name={'TRANSILIEN P'} img={TRAIN_P} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01731'} name={'TRANSILIEN R'} img={TRAIN_R} trafics={this.props.trafic} />
					<SNCF_trafic line={'C01741'} name={'TRANSILIEN U'} img={TRAIN_U} trafics={this.props.trafic} />
				</div>
			</div>
		)
	}
}

function getTrafic(trafics, line) {
	for (var i = 0; i < trafics.length; i++) {
		if (trafics[i].id === line) {
			return trafics[i];
		}
	}
	return false;
}
function SNCF_trafic({ line, trafics, name, img }) {
	let color;
	let trafic = {};
	let typeImg;

	if (typeof trafics === "undefined") {
		return null;
	}

	trafic = getTrafic(trafics, line);
	if (trafic === false || trafic.severity === 0) {
		return <span className="trafic_block slug0">
			<img src={img} className='img' />
			<span className='trafic_img' ></span>
		</span>;
	
	} else if (trafic.severity === 5) {
		color = 'slug1';
		typeImg = error
	} else if (trafic.severity === 4) {
		color = 'slug2';
		typeImg = warning;
	} else if (trafic.severity === 3) {
		color = 'slug2';
		typeImg = work;
	} else if (trafic.severity === 2) {
		color = 'slug0';
		typeImg = futureWork;
	} else if (trafic.severity === 1) {
		color = 'slug0';
		typeImg = information;
	} else {
		color = 'slug0';
		typeImg = interogation;
	}

	return <span className={'trafic_block ' + color}>
		<img src={img} className='img' />
		<img src={typeImg} className='trafic_img' />
	</span>;
}

export default Trafic;
