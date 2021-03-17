import NumComponent from "@/rete/components/constants/NumComponent";
import StartupComponent from "@/rete/components/control/StartupComponent";
import ScriptComponent from "@/rete/components/control/ScriptComponent";
import AssetComponent from "@/rete/components/constants/AssetComponent";
import ToggleComponent from "@/rete/components/control/ToggleComponent";
import UnitRefComponent from "@/rete/components/constants/UnitRefComponent";
import TimerComponent from "@/rete/components/timer/TimerComponent";
import TimerTriggerComponent from "@/rete/components/timer/TimerTriggerComponent";
import TimerSetComponent from "@/rete/components/timer/TimerSetComponent";
import {ModuleComponent} from "@/rete/components/modules/ModuleComponent";
import InputComponent from "@/rete/components/modules/InputComponent";
import sockets from "@/rete/sockets";
import OutputComponent from "@/rete/components/modules/OutputComponent";
import SpawnPlayer from "@/rete/components/spawn/SpawnPlayer";
import SpawnEnemy from "@/rete/components/spawn/SpawnEnemy";
import SpawnEnemyGroup from "@/rete/components/spawn/SpawnEnemyGroup";
import DifficultyComponent from "@/rete/components/control/DifficultyComponent";
import WhisperState from "@/rete/components/control/WhisperState";
import AreaTrigger from "@/rete/components/trigger/AreaTrigger";
import PlaySound from "@/rete/components/PlaySound";
import SpecialObjective from "@/rete/components/unit/SpecialObjective";
import UnitSequence from "@/rete/components/unit/UnitSequence";
import MoveUnit from "@/rete/components/unit/MoveUnit";
import EnemyPreferredAdd from "@/rete/components/spawn/EnemyPreferredAdd";
import EnemyPreferredRemove from "@/rete/components/spawn/EnemyPreferredRemove";
import Operator from "@/rete/components/control/Operator";
import AIGraph from "@/rete/components/control/AIGraph";
import EnableUnit from "@/rete/components/unit/EnableUnit";
import DisableUnit from "@/rete/components/unit/DisableUnit";
import AreaMinPoliceForce from "@/rete/components/spawn/AreaMinPoliceForce";
import AiGlobalEvent from "@/rete/components/control/AiGlobalEvent";
import Waypoint from "@/rete/components/ui/Waypoint";
import FadeToBlack from "@/rete/components/ui/FadeToBlack";
import MissionEnd from "@/rete/components/control/MissionEnd";
import PlayerState from "@/rete/components/control/PlayerState";

let components = {
    constant: new NumComponent(),
    startup: new StartupComponent(),
    MissionScriptElement: new ScriptComponent(),
    asset: new AssetComponent(),
    toggle: new ToggleComponent(),
    unitRef: new UnitRefComponent(),
    timer: new TimerComponent(),
    timerTrigger: new TimerTriggerComponent(),
    timerSet: new TimerSetComponent(),
    module: new ModuleComponent(),
    inputElement: new InputComponent('Input element', 'Previous elements', sockets.element),
    inputNumber: new InputComponent('Input number', 'Number', sockets.number),
    inputUnitRef: new InputComponent('Input unit ref', 'Unit ref', sockets.unit),
    outputElement: new OutputComponent('Output element', 'Next elements', sockets.element),
    outputNumber: new OutputComponent('Output number', 'Number', sockets.number),
    outputUnitRef: new OutputComponent('Output unit ref', 'Unit ref', sockets.unit),
    ElementPlayerSpawner: new SpawnPlayer(),
    ElementSpawnEnemyDummy: new SpawnEnemy(),
    ElementSpawnEnemyGroup: new SpawnEnemyGroup(),
    ElementDifficulty: new DifficultyComponent(),
    ElementWhisperState: new WhisperState(),
    ElementAreaTrigger: new AreaTrigger(),
    ElementPlaySound: new PlaySound(),
    ElementSpecialObjective: new SpecialObjective(),
    ElementUnitSequence: new UnitSequence(),
    ElementMoveUnit: new MoveUnit(),
    ElementEnemyPreferedAdd: new EnemyPreferredAdd(),
    ElementEnemyPreferedRemove: new EnemyPreferredRemove(),
    ElementOperator: new Operator(),
    ElementAIGraph: new AIGraph(),
    ElementEnableUnit: new EnableUnit(),
    ElementDisableUnit: new DisableUnit(),
    ElementAreaMinPoliceForce: new AreaMinPoliceForce(),
    ElementAiGlobalEvent: new AiGlobalEvent(),
    ElementFadeToBlack: new FadeToBlack(),
    ElementWaypoint: new Waypoint(),
    ElementMissionEnd: new MissionEnd(),
    ElementPlayerState: new PlayerState()
};
export default components;