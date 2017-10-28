export const SERVICE_AREAS_TO_ZIPS: {
  [county: string]: number[]
} = {
    Alameda: [94501, 94502, 94505, 94513, 94514, 94530, 94536, 94537, 94538, 94539, 94540, 94541, 94542, 94543, 94544, 94545, 94546, 94550, 94551, 94552, 94555, 94557, 94560, 94563, 94566, 94568, 94577, 94578, 94579, 94580, 94583, 94586, 94587, 94588, 94601, 94602, 94603, 94604, 94605, 94606, 94607, 94608, 94609, 94610, 94611, 94612, 94614, 94618, 94619, 94620, 94621, 94623, 94624, 94661, 94662, 94701, 94702, 94703, 94704, 94705, 94706, 94707, 94708, 94709, 94710, 94712, 94804, 95035, 95377, 95391],
    Alpine: [95223, 96120],
    Amador: [95252, 95601, 95629, 95638, 95640, 95642, 95646, 95654, 95665, 95666, 95669, 95682, 95683, 95685, 95689, 95699],
    Butte: [95901, 95914, 95916, 95917, 95920, 95926, 95927, 95928, 95930, 95932, 95938, 95940, 95941, 95942, 95943, 95948, 95953, 95954, 95958, 95963, 95965, 95966, 95967, 95968, 95969, 95973, 95974, 95978, 95981],
    Calaveras: [95221, 95222, 95223, 95224, 95225, 95226, 95228, 95230, 95232, 95233, 95236, 95245, 95246, 95247, 95248, 95249, 95251, 95252, 95254, 95255, 95257, 95327, 95640, 95642, 95666],
    Colusa: [95423, 95645, 95912, 95920, 95932, 95939, 95950, 95955, 95957, 95970, 95979, 95987, 95988],
    'Contra Costa': [94505, 94506, 94507, 94509, 94511, 94513, 94514, 94516, 94517, 94518, 94519, 94520, 94521, 94522, 94523, 94524, 94525, 94526, 94528, 94530, 94531, 94547, 94548, 94549, 94551, 94552, 94553, 94556, 94561, 94563, 94564, 94565, 94568, 94569, 94570, 94572, 94582, 94583, 94588, 94595, 94596, 94597, 94598, 94611, 94705, 94706, 94707, 94708, 94801, 94802, 94803, 94804, 94805, 94806, 94807, 94808, 94820, 94850],
    'Del Norte': [95531, 95538, 95543, 95546, 95548, 95567, 96039],
    'El Dorado': [95613, 95614, 95619, 95623, 95629, 95630, 95633, 95634, 95635, 95636, 95651, 95656, 95664, 95666, 95667, 95669, 95672, 95675, 95682, 95683, 95684, 95689, 95709, 95720, 95726, 95735, 95762, 96142, 96150, 96151, 96155, 96158],
    Fresno: [93204, 93210, 93230, 93234, 93242, 93266, 93451, 93602, 93603, 93605, 93606, 93607, 93608, 93609, 93611, 93612, 93613, 93616, 93618, 93619, 93620, 93621, 93622, 93624, 93625, 93626, 93627, 93628, 93630, 93631, 93634, 93640, 93641, 93644, 93646, 93647, 93648, 93649, 93650, 93651, 93652, 93654, 93656, 93657, 93660, 93662, 93664, 93667, 93668, 93675, 93701, 93702, 93703, 93704, 93705, 93706, 93707, 93708, 93709, 93710, 93711, 93712, 93714, 93715, 93716, 93717, 93718, 93720, 93721, 93722, 93723, 93725, 93726, 93727, 93728, 93729, 93730, 93737, 93744, 93745, 93747, 93755, 93771, 93772, 93773, 93774, 93775, 93776, 93777, 93778, 93779, 93790, 93791, 93792, 93793, 93794, 95043],
    Glenn: [95428, 95913, 95920, 95932, 95939, 95943, 95951, 95963, 95970, 95979, 95988, 96080],
    Humboldt: [95501, 95502, 95503, 95511, 95514, 95518, 95519, 95521, 95524, 95525, 95526, 95528, 95534, 95536, 95537, 95540, 95542, 95545, 95546, 95547, 95548, 95549, 95550, 95551, 95553, 95554, 95555, 95556, 95558, 95559, 95560, 95562, 95564, 95565, 95569, 95570, 95571, 95573, 95587, 95589],
    Imperial: [91934, 92004, 92222, 92225, 92227, 92231, 92232, 92233, 92243, 92244, 92249, 92250, 92251, 92257, 92259, 92266, 92273, 92274, 92281, 92283],
    Inyo: [92328, 92384, 92389, 93512, 93513, 93514, 93515, 93522, 93526, 93527, 93530, 93545, 93549, 93562],
    Kern: [93203, 93204, 93205, 93206, 93215, 93216, 93219, 93220, 93222, 93224, 93225, 93226, 93238, 93240, 93241, 93243, 93249, 93250, 93251, 93252, 93255, 93257, 93263, 93265, 93268, 93276, 93280, 93283, 93285, 93287, 93301, 93302, 93303, 93304, 93305, 93306, 93307, 93308, 93309, 93311, 93312, 93313, 93314, 93380, 93383, 93384, 93385, 93386, 93387, 93388, 93389, 93390, 93453, 93461, 93501, 93502, 93504, 93505, 93516, 93518, 93519, 93523, 93527, 93528, 93531, 93535, 93536, 93542, 93554, 93555, 93556, 93558, 93560, 93561, 93581, 93596, 93633],
    Kings: [93202, 93204, 93210, 93212, 93219, 93230, 93232, 93239, 93242, 93245, 93249, 93256, 93266, 93274, 93280, 93291, 93631, 93656],
    Lake: [94515, 94558, 94567, 95422, 95423, 95424, 95426, 95435, 95443, 95449, 95451, 95453, 95457, 95458, 95461, 95464, 95467, 95469, 95485, 95493, 95979],
    Lassen: [95947, 96009, 96056, 96068, 96109, 96113, 96114, 96117, 96119, 96121, 96123, 96127, 96128, 96130, 96132, 96136, 96137],
    'Los Angeles': [90001, 90002, 90003, 90004, 90005, 90006, 90007, 90008, 90009, 90010, 90011, 90012, 90013, 90014, 90015, 90016, 90017, 90018, 90019, 90020, 90021, 90022, 90023, 90024, 90025, 90026, 90027, 90028, 90029, 90030, 90031, 90032, 90033, 90034, 90035, 90036, 90037, 90038, 90039, 90040, 90041, 90042, 90043, 90044, 90045, 90046, 90047, 90048, 90049, 90050, 90051, 90053, 90054, 90055, 90056, 90057, 90058, 90059, 90060, 90061, 90062, 90063, 90064, 90065, 90066, 90067, 90068, 90069, 90070, 90071, 90072, 90073, 90075, 90076, 90077, 90078, 90079, 90080, 90081, 90082, 90083, 90086, 90087, 90091, 90093, 90094, 90201, 90202, 90209, 90210, 90211, 90212, 90213, 90220, 90221, 90222, 90223, 90224, 90230, 90231, 90232, 90239, 90240, 90241, 90242, 90245, 90247, 90248, 90249, 90250, 90251, 90254, 90255, 90260, 90262, 90264, 90265, 90266, 90267, 90270, 90272, 90274, 90275, 90277, 90278, 90280, 90290, 90291, 90292, 90293, 90294, 90295, 90296, 90301, 90302, 90303, 90304, 90305, 90306, 90307, 90308, 90309, 90310, 90312, 90401, 90402, 90403, 90404, 90405, 90406, 90407, 90408, 90409, 90410, 90411, 90501, 90502, 90503, 90504, 90505, 90507, 90508, 90509, 90510, 90601, 90602, 90603, 90604, 90605, 90606, 90607, 90608, 90609, 90610, 90620, 90621, 90623, 90630, 90631, 90637, 90638, 90640, 90650, 90651, 90652, 90660, 90661, 90662, 90670, 90701, 90702, 90703, 90704, 90706, 90707, 90710, 90711, 90712, 90713, 90714, 90715, 90716, 90717, 90720, 90723, 90731, 90732, 90733, 90734, 90740, 90744, 90745, 90746, 90748, 90749, 90755, 90801, 90802, 90803, 90804, 90805, 90806, 90807, 90808, 90809, 90810, 90813, 90814, 90815, 90831, 90832, 90853, 91001, 91003, 91006, 91007, 91008, 91009, 91010, 91011, 91012, 91016, 91017, 91020, 91021, 91024, 91025, 91030, 91031, 91040, 91041, 91042, 91043, 91046, 91066, 91077, 91101, 91102, 91103, 91104, 91105, 91106, 91107, 91108, 91109, 91114, 91115, 91116, 91117, 91118, 91201, 91202, 91203, 91204, 91205, 91206, 91207, 91208, 91209, 91210, 91214, 91221, 91222, 91224, 91225, 91226, 91301, 91302, 91303, 91304, 91305, 91306, 91307, 91308, 91309, 91310, 91311, 91313, 91316, 91321, 91322, 91324, 91325, 91326, 91327, 91328, 91331, 91333, 91334, 91335, 91337, 91340, 91341, 91342, 91343, 91344, 91345, 91346, 91350, 91351, 91352, 91353, 91354, 91355, 91356, 91357, 91361, 91362, 91364, 91365, 91367, 91372, 91376, 91377, 91380, 91381, 91384, 91385, 91386, 91387, 91390, 91392, 91393, 91394, 91395, 91396, 91401, 91402, 91403, 91404, 91405, 91406, 91407, 91408, 91409, 91410, 91411, 91412, 91413, 91416, 91423, 91426, 91436, 91501, 91502, 91503, 91504, 91505, 91506, 91507, 91508, 91510, 91601, 91602, 91603, 91604, 91605, 91606, 91607, 91608, 91609, 91610, 91614, 91615, 91616, 91617, 91702, 91706, 91709, 91710, 91711, 91715, 91716, 91722, 91723, 91724, 91731, 91732, 91733, 91734, 91740, 91741, 91744, 91745, 91746, 91747, 91748, 91750, 91754, 91755, 91763, 91765, 91766, 91767, 91768, 91769, 91770, 91773, 91775, 91776, 91778, 91780, 91786, 91788, 91789, 91790, 91791, 91792, 91793, 91801, 91802, 91803, 92301, 92371, 92821, 92823, 92833, 93063, 93225, 93243, 93510, 93532, 93534, 93535, 93536, 93539, 93543, 93544, 93550, 93551, 93552, 93553, 93560, 93563, 93584, 93586, 93590, 93591],
    Madera: [93601, 93602, 93604, 93610, 93614, 93620, 93622, 93623, 93626, 93630, 93636, 93637, 93638, 93639, 93643, 93644, 93645, 93653, 93720, 95338],
    Marin: [94901, 94903, 94904, 94912, 94913, 94914, 94915, 94920, 94924, 94925, 94929, 94930, 94933, 94937, 94938, 94939, 94940, 94941, 94942, 94945, 94946, 94947, 94948, 94949, 94950, 94952, 94956, 94957, 94960, 94963, 94964, 94965, 94966, 94970, 94971, 94973, 94976, 94977, 94978, 94979],
    Mariposa: [93601, 93623, 93644, 93653, 95306, 95311, 95318, 95321, 95325, 95329, 95333, 95338, 95345, 95369, 95389],
    Mendocino: [95410, 95415, 95417, 95418, 95420, 95425, 95427, 95428, 95429, 95432, 95437, 95445, 95449, 95451, 95453, 95454, 95456, 95459, 95460, 95463, 95466, 95468, 95469, 95470, 95481, 95482, 95488, 95490, 95493, 95494, 95497, 95542, 95585, 95587, 95589, 95963, 96080],
    Merced: [93610, 93620, 93622, 93635, 93653, 93661, 93665, 95301, 95303, 95312, 95315, 95316, 95317, 95322, 95324, 95329, 95333, 95334, 95340, 95341, 95344, 95348, 95360, 95365, 95369, 95374, 95380, 95388],
    Modoc: [96006, 96015, 96054, 96056, 96101, 96104, 96108, 96110, 96112, 96115, 96116, 96134],
    Mono: [93512, 93514, 93517, 93529, 93541, 93546, 96107, 96133],
    Monterey: [93210, 93426, 93450, 93451, 93461, 93901, 93902, 93905, 93906, 93907, 93908, 93912, 93915, 93920, 93921, 93922, 93923, 93924, 93925, 93926, 93927, 93928, 93930, 93932, 93933, 93940, 93942, 93943, 93944, 93950, 93953, 93954, 93955, 93960, 93962, 95004, 95012, 95039, 95043, 95045, 95076],
    Napa: [94503, 94508, 94515, 94534, 94558, 94559, 94562, 94567, 94573, 94574, 94576, 94581, 94589, 94599, 95404, 95461, 95476, 95688],
    Nevada: [95602, 95712, 95713, 95724, 95728, 95924, 95945, 95946, 95949, 95959, 95960, 95975, 95977, 95986, 96111, 96160, 96161, 96162],
    Orange: [90603, 90620, 90621, 90622, 90623, 90630, 90631, 90632, 90633, 90638, 90680, 90703, 90715, 90716, 90720, 90721, 90740, 90742, 90743, 90808, 90815, 91709, 92530, 92602, 92603, 92604, 92605, 92606, 92607, 92609, 92610, 92612, 92614, 92615, 92616, 92617, 92618, 92619, 92620, 92623, 92624, 92625, 92626, 92627, 92628, 92629, 92630, 92637, 92646, 92647, 92648, 92649, 92650, 92651, 92652, 92653, 92654, 92655, 92656, 92657, 92658, 92659, 92660, 92661, 92662, 92663, 92672, 92673, 92674, 92675, 92676, 92677, 92678, 92679, 92683, 92684, 92685, 92688, 92690, 92691, 92692, 92693, 92694, 92701, 92702, 92703, 92704, 92705, 92706, 92707, 92708, 92711, 92728, 92735, 92780, 92781, 92782, 92799, 92801, 92802, 92803, 92804, 92805, 92806, 92807, 92808, 92809, 92811, 92812, 92814, 92815, 92816, 92817, 92821, 92822, 92823, 92825, 92831, 92832, 92833, 92834, 92835, 92836, 92837, 92838, 92840, 92841, 92842, 92843, 92844, 92845, 92846, 92856, 92857, 92859, 92861, 92863, 92865, 92866, 92867, 92868, 92869, 92870, 92871, 92883, 92885, 92886, 92887],
    Placer: [95602, 95603, 95604, 95610, 95621, 95626, 95630, 95631, 95634, 95648, 95650, 95658, 95661, 95662, 95663, 95668, 95674, 95677, 95678, 95681, 95701, 95703, 95713, 95714, 95715, 95717, 95722, 95736, 95746, 95747, 95765, 95843, 95945, 95949, 95959, 96140, 96141, 96143, 96145, 96146, 96148, 96161],
    Plumas: [95915, 95916, 95923, 95934, 95947, 95956, 95965, 95971, 95980, 95983, 95984, 96020, 96103, 96105, 96106, 96114, 96118, 96121, 96122, 96124, 96129, 96130, 96135, 96137],
    Riverside: [91752, 91761, 91762, 92028, 92059, 92086, 92201, 92202, 92203, 92210, 92211, 92220, 92223, 92225, 92226, 92230, 92234, 92235, 92236, 92239, 92240, 92241, 92247, 92248, 92252, 92253, 92254, 92255, 92256, 92257, 92258, 92260, 92261, 92262, 92263, 92264, 92270, 92274, 92275, 92276, 92280, 92282, 92313, 92316, 92320, 92324, 92337, 92373, 92399, 92501, 92502, 92503, 92504, 92505, 92506, 92507, 92508, 92509, 92513, 92514, 92516, 92517, 92518, 92519, 92530, 92531, 92532, 92536, 92539, 92543, 92544, 92545, 92546, 92548, 92549, 92551, 92552, 92553, 92554, 92555, 92556, 92557, 92561, 92562, 92563, 92564, 92567, 92570, 92571, 92572, 92581, 92582, 92583, 92584, 92585, 92586, 92587, 92589, 92590, 92591, 92592, 92593, 92595, 92596, 92676, 92860, 92877, 92878, 92879, 92880, 92881, 92882, 92883],
    Sacramento: [94571, 95608, 95609, 95610, 95611, 95615, 95621, 95624, 95626, 95628, 95630, 95632, 95638, 95639, 95640, 95641, 95652, 95655, 95660, 95661, 95662, 95669, 95670, 95673, 95678, 95680, 95683, 95690, 95691, 95693, 95741, 95742, 95747, 95757, 95758, 95759, 95762, 95763, 95811, 95812, 95813, 95814, 95815, 95816, 95817, 95818, 95819, 95820, 95821, 95822, 95823, 95824, 95825, 95826, 95827, 95828, 95829, 95830, 95831, 95832, 95833, 95834, 95835, 95836, 95837, 95838, 95841, 95842, 95843, 95851, 95852, 95853, 95860, 95864, 95865, 95866, 95899],
    'San Benito': [93640, 93926, 93930, 95004, 95020, 95023, 95024, 95043, 95045, 95075, 95076],
    'San Bernardino': [91701, 91708, 91709, 91710, 91711, 91729, 91730, 91737, 91739, 91743, 91752, 91759, 91761, 91762, 91763, 91764, 91765, 91766, 91767, 91784, 91785, 91786, 92223, 92242, 92252, 92256, 92267, 92268, 92277, 92278, 92280, 92284, 92285, 92286, 92301, 92305, 92307, 92308, 92309, 92310, 92311, 92312, 92313, 92314, 92315, 92316, 92317, 92318, 92320, 92321, 92322, 92323, 92324, 92325, 92327, 92329, 92331, 92332, 92333, 92334, 92335, 92336, 92337, 92338, 92339, 92340, 92341, 92342, 92344, 92345, 92346, 92347, 92352, 92354, 92356, 92358, 92359, 92363, 92364, 92365, 92366, 92368, 92369, 92371, 92372, 92373, 92374, 92375, 92376, 92377, 92378, 92382, 92385, 92386, 92391, 92392, 92393, 92394, 92395, 92397, 92398, 92399, 92401, 92402, 92404, 92405, 92406, 92407, 92408, 92410, 92411, 92413, 92423, 92427, 92501, 92507, 92509, 92821, 92880, 93516, 93535, 93544, 93555, 93562, 93591, 93592],
    'San Diego': [91901, 91902, 91903, 91905, 91906, 91908, 91909, 91910, 91911, 91912, 91913, 91914, 91915, 91916, 91917, 91921, 91931, 91932, 91933, 91934, 91935, 91941, 91942, 91943, 91944, 91945, 91946, 91948, 91950, 91951, 91962, 91963, 91976, 91977, 91978, 91979, 91980, 92003, 92004, 92007, 92008, 92009, 92010, 92011, 92013, 92014, 92018, 92019, 92020, 92021, 92022, 92023, 92024, 92025, 92026, 92027, 92028, 92029, 92030, 92033, 92036, 92037, 92038, 92039, 92040, 92046, 92049, 92051, 92052, 92054, 92056, 92057, 92058, 92059, 92060, 92061, 92064, 92065, 92066, 92067, 92068, 92069, 92070, 92071, 92072, 92074, 92075, 92078, 92079, 92081, 92082, 92083, 92084, 92085, 92086, 92088, 92091, 92101, 92102, 92103, 92104, 92105, 92106, 92107, 92108, 92109, 92110, 92111, 92112, 92113, 92114, 92115, 92116, 92117, 92118, 92119, 92120, 92121, 92122, 92123, 92124, 92126, 92127, 92128, 92129, 92130, 92131, 92137, 92138, 92139, 92142, 92143, 92149, 92150, 92153, 92154, 92159, 92160, 92163, 92165, 92166, 92167, 92168, 92169, 92170, 92171, 92172, 92173, 92174, 92175, 92176, 92177, 92178, 92179, 92186, 92191, 92192, 92193, 92195, 92196, 92198, 92536, 92562, 92590, 92592, 92672],
    'San Francisco': [94014, 94102, 94103, 94104, 94105, 94107, 94108, 94109, 94110, 94111, 94112, 94114, 94115, 94116, 94117, 94118, 94119, 94120, 94121, 94122, 94123, 94124, 94126, 94127, 94129, 94130, 94131, 94132, 94133, 94134, 94140, 94141, 94142, 94143, 94146, 94147, 94158, 94159, 94164, 94172, 94188],
    'San Joaquin': [94514, 95201, 95202, 95203, 95204, 95205, 95206, 95207, 95208, 95209, 95210, 95212, 95213, 95215, 95219, 95220, 95227, 95230, 95231, 95234, 95236, 95237, 95240, 95241, 95242, 95252, 95253, 95258, 95267, 95269, 95304, 95320, 95330, 95336, 95337, 95361, 95366, 95367, 95376, 95377, 95378, 95385, 95391, 95632, 95640, 95686, 95690, 95757],
    'San Luis Obispo': [93224, 93252, 93254, 93401, 93402, 93403, 93405, 93406, 93412, 93420, 93421, 93422, 93423, 93424, 93426, 93428, 93430, 93432, 93433, 93442, 93443, 93444, 93445, 93446, 93447, 93448, 93449, 93451, 93452, 93453, 93454, 93458, 93461, 93465, 93475, 93483, 93920],
    'San Mateo': [94002, 94005, 94010, 94011, 94014, 94015, 94016, 94017, 94018, 94019, 94020, 94021, 94025, 94026, 94027, 94028, 94030, 94037, 94038, 94044, 94060, 94061, 94062, 94063, 94064, 94065, 94066, 94070, 94074, 94080, 94083, 94112, 94125, 94128, 94132, 94134, 94301, 94303, 94304, 94305, 94401, 94402, 94403, 94404, 95033],
    'Santa Barbara': [93001, 93013, 93014, 93067, 93101, 93102, 93103, 93105, 93108, 93109, 93110, 93111, 93116, 93117, 93118, 93120, 93121, 93130, 93140, 93150, 93160, 93190, 93252, 93254, 93427, 93429, 93434, 93436, 93437, 93438, 93440, 93441, 93444, 93454, 93455, 93456, 93457, 93458, 93460, 93463, 93464],
    'Santa Clara': [94020, 94022, 94023, 94024, 94025, 94028, 94035, 94039, 94040, 94041, 94042, 94043, 94062, 94085, 94086, 94087, 94088, 94089, 94301, 94302, 94303, 94304, 94305, 94306, 94309, 94538, 94539, 94550, 94586, 95002, 95008, 95009, 95011, 95013, 95014, 95015, 95020, 95021, 95023, 95026, 95030, 95031, 95032, 95033, 95035, 95036, 95037, 95038, 95042, 95044, 95046, 95050, 95051, 95052, 95054, 95055, 95056, 95070, 95071, 95076, 95103, 95106, 95108, 95109, 95110, 95111, 95112, 95113, 95116, 95117, 95118, 95119, 95120, 95121, 95122, 95123, 95124, 95125, 95126, 95127, 95128, 95129, 95130, 95131, 95132, 95133, 95134, 95135, 95136, 95138, 95139, 95140, 95141, 95148, 95150, 95151, 95152, 95153, 95154, 95155, 95156, 95157, 95158, 95159, 95160, 95161, 95164, 95170, 95172, 95173],
    'Santa Cruz': [94060, 95001, 95003, 95005, 95006, 95007, 95010, 95017, 95018, 95019, 95033, 95041, 95060, 95061, 95062, 95063, 95064, 95065, 95066, 95067, 95073, 95076, 95077],
    Shasta: [96001, 96002, 96003, 96007, 96008, 96011, 96013, 96016, 96017, 96019, 96022, 96025, 96028, 96033, 96040, 96047, 96049, 96051, 96052, 96056, 96057, 96059, 96062, 96065, 96069, 96071, 96073, 96075, 96076, 96079, 96080, 96084, 96087, 96088, 96089, 96095, 96096, 96099],
    Sierra: [95910, 95922, 95936, 95944, 95959, 95960, 95971, 96109, 96118, 96124, 96125, 96126, 96161],
    Siskiyou: [95568, 96014, 96023, 96025, 96027, 96028, 96031, 96032, 96034, 96037, 96038, 96039, 96044, 96050, 96057, 96058, 96064, 96067, 96085, 96086, 96094, 96097, 96134],
    Solano: [94503, 94510, 94512, 94533, 94534, 94535, 94558, 94571, 94585, 94589, 94590, 94591, 94592, 95616, 95618, 95620, 95625, 95687, 95688, 95690, 95694, 95696],
    Sonoma: [94515, 94558, 94559, 94574, 94922, 94923, 94927, 94928, 94931, 94951, 94952, 94953, 94954, 94955, 94972, 94975, 95401, 95402, 95403, 95404, 95405, 95406, 95407, 95409, 95412, 95416, 95419, 95421, 95425, 95430, 95431, 95433, 95436, 95439, 95441, 95442, 95444, 95445, 95446, 95448, 95450, 95452, 95461, 95462, 95465, 95471, 95472, 95473, 95476, 95480, 95486, 95487, 95492],
    Stanislaus: [95228, 95230, 95304, 95307, 95313, 95316, 95319, 95322, 95323, 95324, 95326, 95327, 95328, 95329, 95350, 95351, 95352, 95353, 95354, 95355, 95356, 95357, 95358, 95360, 95361, 95363, 95367, 95368, 95369, 95380, 95381, 95382, 95385, 95386, 95387],
    Sutter: [95626, 95645, 95648, 95659, 95668, 95674, 95676, 95692, 95836, 95837, 95948, 95953, 95957, 95982, 95991, 95992, 95993],
    Tehama: [95942, 95963, 95973, 96007, 96021, 96022, 96029, 96035, 96055, 96059, 96061, 96063, 96074, 96075, 96076, 96078, 96080, 96090, 96092],
    Trinity: [95428, 95526, 95527, 95542, 95552, 95563, 95595, 96010, 96024, 96041, 96046, 96048, 96051, 96052, 96076, 96091, 96093],
    Tulare: [93201, 93207, 93208, 93212, 93215, 93218, 93219, 93221, 93223, 93226, 93227, 93230, 93235, 93237, 93238, 93244, 93247, 93255, 93256, 93257, 93258, 93260, 93261, 93262, 93265, 93267, 93270, 93271, 93272, 93274, 93275, 93277, 93278, 93279, 93280, 93286, 93290, 93291, 93292, 93527, 93603, 93615, 93618, 93631, 93641, 93646, 93647, 93654, 93666, 93670, 93673, 93675],
    Tuolumne: [95228, 95305, 95309, 95310, 95311, 95321, 95327, 95329, 95335, 95346, 95347, 95361, 95364, 95370, 95372, 95373, 95375, 95379, 95383],
    Ventura: [90265, 91302, 91304, 91307, 91311, 91319, 91320, 91358, 91359, 91360, 91361, 91362, 91377, 93001, 93002, 93003, 93004, 93005, 93006, 93007, 93010, 93011, 93012, 93013, 93015, 93016, 93020, 93021, 93022, 93023, 93024, 93030, 93031, 93032, 93033, 93034, 93035, 93036, 93040, 93041, 93044, 93060, 93061, 93062, 93063, 93065, 93066, 93094, 93225, 93252],
    Yolo: [95457, 95605, 95606, 95607, 95612, 95615, 95616, 95617, 95618, 95620, 95627, 95637, 95645, 95653, 95679, 95691, 95694, 95695, 95697, 95698, 95776, 95798, 95912, 95937],
    Yuba: [95648, 95674, 95681, 95692, 95901, 95903, 95914, 95918, 95919, 95922, 95925, 95930, 95935, 95941, 95949, 95960, 95961, 95962, 95966, 95972, 95977]
  }

export const COUNTIES = Object.keys(SERVICE_AREAS_TO_ZIPS).sort()
