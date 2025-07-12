<p align="center" dir="auto">
  <a href="https://starcomputer.space/shop"><img src="https://github.com/user-attachments/assets/d3faa844-0d2a-4df8-b12a-d10a75cc8e1a" secured-asset-link="" style="max-width: 100%;"></a>
 </p>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyberpunk Cityscape</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');

        :root {
            --neon-blue: #00f3ff;
            --neon-pink: #ff00ff;
            --neon-purple: #9d00ff;
            --neon-green: #00ff66;
            --neon-yellow: #ffff00;
            --neon-orange: #ff6600;
            --neon-red: #ff0033;
        }

        body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #050510;
            font-family: 'Rajdhani', sans-serif;
        }

        .orbitron {
            font-family: 'Orbitron', sans-serif;
        }

        .scene {
            position: relative;
            width: 100vw;
            height: 100vh;
            perspective: 1000px;
            overflow: hidden;
        }

        .sky {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 70%;
            background: linear-gradient(to bottom, #000000, #0a0a20);
            z-index: 1;
        }

        .stars {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 70%;
            z-index: 2;
        }

        .star {
            position: absolute;
            background-color: #ffffff;
            border-radius: 50%;
            animation: twinkle 4s infinite ease-in-out;
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
        }

        .ground {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 30%;
            background: linear-gradient(to bottom, #0a0a20, #000000);
            z-index: 3;
        }

        .street {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 30%;
            background-color: #000000;
            transform: rotateX(60deg);
            transform-origin: bottom;
            z-index: 4;
        }

        .street-grid {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(90deg, rgba(0, 243, 255, 0.2) 1px, transparent 1px),
                linear-gradient(rgba(0, 243, 255, 0.2) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: grid-move 10s linear infinite;
        }

        @keyframes grid-move {
            0% { background-position: 0 0; }
            100% { background-position: 0 50px; }
        }

        .street-reflection {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(ellipse at center, rgba(0, 243, 255, 0.3) 0%, rgba(255, 0, 255, 0.3) 50%, rgba(0, 0, 0, 0) 70%);
            opacity: 0.5;
            mix-blend-mode: screen;
        }

        .street-center-line {
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: rgba(255, 255, 0, 0.8);
            box-shadow: 0 0 10px var(--neon-yellow);
            animation: center-line-move 5s linear infinite;
        }

        @keyframes center-line-move {
            0% { transform: translateY(0); }
            100% { transform: translateY(50px); }
        }

        .buildings {
            position: absolute;
            bottom: 30%;
            left: 0;
            width: 100%;
            height: 70%;
            z-index: 5;
        }

        .building {
            position: absolute;
            bottom: 0;
            background-color: #0a0a20;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
        }

        .building-windows {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .window {
            position: absolute;
            background-color: rgba(255, 255, 0, 0.7);
            box-shadow: 0 0 5px rgba(255, 255, 0, 0.7);
            animation: window-flicker 4s infinite;
        }

        @keyframes window-flicker {
            0%, 100% { opacity: 0.7; }
            25% { opacity: 0.3; }
            50% { opacity: 0.8; }
            75% { opacity: 0.5; }
        }

        .neon-sign {
            position: absolute;
            font-family: 'Orbitron', sans-serif;
            font-weight: bold;
            text-transform: uppercase;
            animation: neon-flicker 2s infinite alternate;
        }

        @keyframes neon-flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
                opacity: 1;
                text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
            }
            20%, 24%, 55% {
                opacity: 0.5;
                text-shadow: none;
            }
        }

        .hologram {
            position: absolute;
            border-radius: 5px;
            overflow: hidden;
            opacity: 0.8;
            animation: hologram-flicker 4s infinite;
        }

        @keyframes hologram-flicker {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 0.6; }
        }

        .hologram::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: repeating-linear-gradient(
                0deg,
                rgba(0, 243, 255, 0.1),
                rgba(0, 243, 255, 0.1) 1px,
                transparent 1px,
                transparent 2px
            );
            pointer-events: none;
            z-index: 1;
        }

        .hologram-content {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(45deg, var(--neon-blue), var(--neon-purple));
            z-index: 0;
        }

        .flying-vehicle {
            position: absolute;
            z-index: 6;
            animation: fly-across linear infinite;
        }

        @keyframes fly-across {
            0% {
                transform: translateX(-100px) translateY(0);
            }
            100% {
                transform: translateX(calc(100vw + 100px)) translateY(0);
            }
        }

        .vehicle-light {
            position: absolute;
            background: linear-gradient(to right, rgba(255,255,255,0.8), transparent);
        }

        .rain {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            pointer-events: none;
        }

        .raindrop {
            position: absolute;
            width: 1px;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5));
            animation: rain-fall linear infinite;
        }

        @keyframes rain-fall {
            0% {
                transform: translateY(-100vh) skewX(-20deg);
            }
            100% {
                transform: translateY(100vh) skewX(-20deg);
            }
        }

        .splash {
            position: absolute;
            bottom: 30%;
            width: 4px;
            height: 4px;
            background-color: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            animation: splash 0.5s linear infinite;
        }

        @keyframes splash {
            0% {
                transform: scale(0);
                opacity: 0.7;
            }
            100% {
                transform: scale(2);
                opacity: 0;
            }
        }

        .person {
            position: absolute;
            bottom: 30%;
            z-index: 7;
        }

        .steam {
            position: absolute;
            bottom: 30%;
            width: 10px;
            background: linear-gradient(to top, transparent, rgba(255, 255, 255, 0.3), transparent);
            border-radius: 50%;
            animation: steam-rise 3s infinite;
            z-index: 8;
        }

        @keyframes steam-rise {
            0% {
                transform: translateY(0) scale(1);
                opacity: 0.7;
            }
            100% {
                transform: translateY(-50px) scale(2);
                opacity: 0;
            }
        }

        .grate {
            position: absolute;
            bottom: 30%;
            width: 20px;
            height: 5px;
            background: repeating-linear-gradient(
                90deg,
                #333,
                #333 2px,
                #111 2px,
                #111 4px
            );
            z-index: 7;
        }

        .spotlight {
            position: absolute;
            width: 100px;
            height: 200px;
            background: radial-gradient(
                ellipse at center,
                rgba(255, 255, 255, 0.1) 0%,
                rgba(255, 255, 255, 0) 70%
            );
            border-radius: 50%;
            transform: rotate(-45deg);
            animation: spotlight-move 10s infinite alternate;
            mix-blend-mode: screen;
            z-index: 9;
        }

        @keyframes spotlight-move {
            0% {
                transform: rotate(-45deg) translateX(-50px);
            }
            100% {
                transform: rotate(-45deg) translateX(50px);
            }
        }

        .sidewalk {
            position: absolute;
            bottom: 30%;
            left: 0;
            width: 100%;
            height: 10px;
            background-color: #222;
            z-index: 6;
        }

        .sidewalk-left {
            position: absolute;
            left: 0;
            width: 15%;
            height: 100%;
        }

        .sidewalk-right {
            position: absolute;
            right: 0;
            width: 15%;
            height: 100%;
        }

        .decay {
            position: absolute;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 2px;
            z-index: 6;
        }

        .controls {
            position: absolute;
            bottom: 20px;
            left: 20px;
            z-index: 100;
            display: flex;
            gap: 10px;
        }

        .control-btn {
            background-color: rgba(0, 0, 0, 0.7);
            border: 1px solid var(--neon-blue);
            color: var(--neon-blue);
            padding: 5px 15px;
            border-radius: 4px;
            font-family: 'Orbitron', sans-serif;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .control-btn:hover {
            background-color: rgba(0, 243, 255, 0.2);
            box-shadow: 0 0 10px var(--neon-blue);
        }

        .billboard {
            position: absolute;
            overflow: hidden;
            border: 2px solid;
            z-index: 6;
        }

        .billboard-content {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            padding: 5px;
            animation: ad-change 10s infinite;
        }

        @keyframes ad-change {
            0%, 45% {
                opacity: 1;
                transform: scale(1);
            }
            50%, 95% {
                opacity: 0;
                transform: scale(0.9);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }

        .glitch {
            animation: glitch 2s infinite;
        }

        @keyframes glitch {
            0%, 100% {
                transform: translate(0);
            }
            20% {
                transform: translate(-2px, 2px);
            }
            40% {
                transform: translate(-2px, -2px);
            }
            60% {
                transform: translate(2px, 2px);
            }
            80% {
                transform: translate(2px, -2px);
            }
        }

        .fog {
            position: absolute;
            bottom: 30%;
            left: 0;
            width: 100%;
            height: 20%;
            background: linear-gradient(to top, 
                rgba(0, 0, 30, 0.4), 
                rgba(0, 0, 30, 0.1), 
                transparent);
            z-index: 7;
            pointer-events: none;
        }

        .mood-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(
                circle at center,
                transparent 30%,
                rgba(0, 0, 30, 0.4) 100%
            );
            z-index: 11;
            pointer-events: none;
            mix-blend-mode: multiply;
        }

        .vignette {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-shadow: inset 0 0 150px rgba(0, 0, 0, 0.9);
            z-index: 12;
            pointer-events: none;
        }
    </style>
</head>
<body>
    <div class="scene">
        <!-- Sky background -->
        <div class="sky"></div>
        
        <!-- Stars -->
        <div class="stars" id="stars"></div>
        
        <!-- Ground -->
        <div class="ground"></div>
        
        <!-- Street with grid -->
        <div class="street">
            <div class="street-grid"></div>
            <div class="street-reflection"></div>
            <div class="street-center-line"></div>
        </div>
        
        <!-- Sidewalks -->
        <div class="sidewalk">
            <div class="sidewalk-left"></div>
            <div class="sidewalk-right"></div>
        </div>
        
        <!-- Buildings -->
        <div class="buildings" id="buildings"></div>
        
        <!-- Fog effect -->
        <div class="fog"></div>
        
        <!-- Rain effect -->
        <div class="rain" id="rain"></div>
        
        <!-- Mood overlay -->
        <div class="mood-overlay"></div>
        
        <!-- Vignette effect -->
        <div class="vignette"></div>
        
        <!-- Controls -->
        <div class="controls">
            <button class="control-btn" id="toggle-rain">TOGGLE RAIN</button>
            <button class="control-btn" id="toggle-vehicles">TOGGLE VEHICLES</button>
            <button class="control-btn" id="toggle-neon">TOGGLE NEON</button>
            <button class="control-btn" id="toggle-crowd">TOGGLE CROWD</button>
        </div>
    </div>

    <script>
        // Configuration
        const config = {
            rainEnabled: true,
            vehiclesEnabled: true,
            neonEnabled: true,
            crowdEnabled: true,
            buildingCount: 30,
            vehicleCount: 25,
            rainCount: 400,
            splashCount: 200,
            personCount: 60,
            steamCount: 15,
            neonSignCount: 20,
            hologramCount: 12,
            billboardCount: 8,
            decayCount: 40
        };
        
        // DOM Elements
        const scene = document.querySelector('.scene');
        const buildingsContainer = document.getElementById('buildings');
        const starsContainer = document.getElementById('stars');
        const rainContainer = document.getElementById('rain');
        const toggleRainBtn = document.getElementById('toggle-rain');
        const toggleVehiclesBtn = document.getElementById('toggle-vehicles');
        const toggleNeonBtn = document.getElementById('toggle-neon');
        const toggleCrowdBtn = document.getElementById('toggle-crowd');
        
        // Colors
        const neonColors = [
            'var(--neon-blue)',
            'var(--neon-pink)',
            'var(--neon-purple)',
            'var(--neon-green)',
            'var(--neon-yellow)',
            'var(--neon-orange)',
            'var(--neon-red)'
        ];
        
        // Neon sign texts
        const neonTexts = [
            'CYBER', 'NEXUS', 'TECH', 'DATA', 'SYNC', 
            'CORE', 'LINK', 'NEON', 'CHROME', 'PULSE',
            'ECHO', 'BYTE', 'FLUX', 'NOVA', 'APEX',
            'VOID', 'HACK', 'DRIFT', 'GLOW', 'EDGE'
        ];
        
        // Hologram ad texts
        const hologramTexts = [
            'BUY NOW', 'UPGRADE', 'NEW TECH', 'CYBER MODS', 
            'NEURAL LINK', 'MEMORY BOOST', 'IMPLANTS 50% OFF',
            'VIRTUAL REALITY', 'BODY ENHANCEMENTS', 'AI COMPANIONS',
            'DREAM TECH', 'MIND SYNC', 'CLONE SERVICE', 'CYBER SECURITY'
        ];

        // Billboard ad content
        const billboardAds = [
            {
                title: 'NEURALINK X9',
                subtitle: 'THINK FASTER',
                color: 'var(--neon-blue)'
            },
            {
                title: 'CYBERWARE',
                subtitle: 'UPGRADE YOURSELF',
                color: 'var(--neon-pink)'
            },
            {
                title: 'SYNTHBLOOD',
                subtitle: 'LIVE LONGER',
                color: 'var(--neon-red)'
            },
            {
                title: 'VIRTULIFE',
                subtitle: 'ESCAPE REALITY',
                color: 'var(--neon-green)'
            },
            {
                title: 'MEGACORP',
                subtitle: 'WE OWN YOU',
                color: 'var(--neon-purple)'
            },
            {
                title: 'NEON DREAMS',
                subtitle: 'SLEEP OPTIONAL',
                color: 'var(--neon-yellow)'
            },
            {
                title: 'BLACKMARKET',
                subtitle: 'NO QUESTIONS ASKED',
                color: 'var(--neon-orange)'
            },
            {
                title: 'DATASTREAM',
                subtitle: 'PURE INFORMATION',
                color: 'var(--neon-blue)'
            }
        ];
        
        // Initialize the scene
        function initScene() {
            createStars();
            createBuildings();
            createRain();
            createSidewalks();
            createPeople();
            createSteamVents();
            createVehicles();
            createDecay();
        }
        
        // Create stars in the sky
        function createStars() {
            starsContainer.innerHTML = '';
            const starCount = Math.floor(window.innerWidth * window.innerHeight / 1000);
            
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                
                const size = Math.random() * 2 + 1;
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * (window.innerHeight * 0.7);
                const delay = Math.random() * 4;
                
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.left = `${x}px`;
                star.style.top = `${y}px`;
                star.style.animationDelay = `${delay}s`;
                
                starsContainer.appendChild(star);
            }
        }
        
        // Create buildings
        function createBuildings() {
            buildingsContainer.innerHTML = '';
            const width = window.innerWidth;
            const height = window.innerHeight * 0.7;
            
            // Create background buildings
            for (let i = 0; i < config.buildingCount; i++) {
                const building = document.createElement('div');
                building.className = 'building';
                
                const buildingWidth = Math.random() * 100 + 60;
                const buildingHeight = Math.random() * (height * 0.8) + (height * 0.2);
                const buildingLeft = (width / config.buildingCount) * i + Math.random() * 20 - 10;
                
                building.style.width = `${buildingWidth}px`;
                building.style.height = `${buildingHeight}px`;
                building.style.left = `${buildingLeft}px`;
                
                // Add windows to the building
                const windowsContainer = document.createElement('div');
                windowsContainer.className = 'building-windows';
                
                const windowRows = Math.floor(buildingHeight / 15);
                const windowCols = Math.floor(buildingWidth / 10);
                
                for (let row = 0; row < windowRows; row++) {
                    for (let col = 0; col < windowCols; col++) {
                        if (Math.random() > 0.3) {
                            const windowEl = document.createElement('div');
                            windowEl.className = 'window';
                            
                            const windowWidth = Math.random() * 3 + 2;
                            const windowHeight = Math.random() * 4 + 3;
                            const windowLeft = col * 10 + Math.random() * 2;
                            const windowTop = row * 15 + Math.random() * 2;
                            
                            windowEl.style.width = `${windowWidth}px`;
                            windowEl.style.height = `${windowHeight}px`;
                            windowEl.style.left = `${windowLeft}px`;
                            windowEl.style.top = `${windowTop}px`;
                            windowEl.style.animationDelay = `${Math.random() * 5}s`;
                            
                            // Random window color
                            const windowColor = neonColors[Math.floor(Math.random() * neonColors.length)];
                            windowEl.style.backgroundColor = windowColor;
                            windowEl.style.boxShadow = `0 0 5px ${windowColor}`;
                            
                            windowsContainer.appendChild(windowEl);
                        }
                    }
                }
                
                building.appendChild(windowsContainer);
                
                // Add neon signs to some buildings
                if (i % 3 === 0 && config.neonEnabled) {
                    const neonSign = document.createElement('div');
                    neonSign.className = 'neon-sign';
                    
                    const text = neonTexts[Math.floor(Math.random() * neonTexts.length)];
                    const color = neonColors[Math.floor(Math.random() * neonColors.length)];
                    const fontSize = Math.random() * 14 + 10;
                    const signLeft = Math.random() * (buildingWidth - text.length * fontSize * 0.6);
                    const signTop = Math.random() * (buildingHeight - 50);
                    
                    neonSign.textContent = text;
                    neonSign.style.color = color;
                    neonSign.style.fontSize = `${fontSize}px`;
                    neonSign.style.left = `${signLeft}px`;
                    neonSign.style.top = `${signTop}px`;
                    neonSign.style.animationDelay = `${Math.random() * 5}s`;
                    
                    building.appendChild(neonSign);
                }
                
                // Add holographic billboards to some buildings
                if (i % 4 === 1 && config.neonEnabled) {
                    const hologram = document.createElement('div');
                    hologram.className = 'hologram';
                    
                    const holoWidth = Math.random() * 60 + 40;
                    const holoHeight = Math.random() * 30 + 20;
                    const holoLeft = Math.random() * (buildingWidth - holoWidth);
                    const holoTop = Math.random() * (buildingHeight - holoHeight - 20);
                    
                    hologram.style.width = `${holoWidth}px`;
                    hologram.style.height = `${holoHeight}px`;
                    hologram.style.left = `${holoLeft}px`;
                    hologram.style.top = `${holoTop}px`;
                    
                    const content = document.createElement('div');
                    content.className = 'hologram-content orbitron';
                    content.textContent = hologramTexts[Math.floor(Math.random() * hologramTexts.length)];
                    content.style.fontSize = `${Math.random() * 6 + 8}px`;
                    
                    hologram.appendChild(content);
                    building.appendChild(hologram);
                }
                
                buildingsContainer.appendChild(building);
            }
            
            // Create large billboards
            if (config.neonEnabled) {
                for (let i = 0; i < config.billboardCount; i++) {
                    const billboard = document.createElement('div');
                    billboard.className = 'billboard';
                    
                    const billWidth = Math.random() * 120 + 80;
                    const billHeight = Math.random() * 60 + 40;
                    const billLeft = Math.random() * (width - billWidth);
                    const billTop = Math.random() * (height * 0.5);
                    
                    const ad = billboardAds[Math.floor(Math.random() * billboardAds.length)];
                    const color = ad.color;
                    
                    billboard.style.width = `${billWidth}px`;
                    billboard.style.height = `${billHeight}px`;
                    billboard.style.left = `${billLeft}px`;
                    billboard.style.top = `${billTop}px`;
                    billboard.style.borderColor = color;
                    billboard.style.boxShadow = `0 0 15px ${color}`;
                    
                    const content = document.createElement('div');
                    content.className = 'billboard-content orbitron';
                    content.style.backgroundColor = `${color}20`;
                    content.style.animationDelay = `${Math.random() * 10}s`;
                    
                    const title = document.createElement('div');
                    title.className = 'text-xl font-bold glitch';
                    title.style.color = color;
                    title.textContent = ad.title;
                    
                    const subtitle = document.createElement('div');
                    subtitle.className = 'text-sm';
                    subtitle.style.color = 'white';
                    subtitle.textContent = ad.subtitle;
                    
                    content.appendChild(title);
                    content.appendChild(subtitle);
                    billboard.appendChild(content);
                    
                    // Create a second content for animation
                    const content2 = document.createElement('div');
                    content2.className = 'billboard-content orbitron';
                    content2.style.backgroundColor = `${color}20`;
                    content2.style.animationDelay = `${Math.random() * 10 + 5}s`;
                    content2.style.position = 'absolute';
                    content2.style.top = '0';
                    content2.style.left = '0';
                    
                    const altAd = billboardAds[Math.floor(Math.random() * billboardAds.length)];
                    
                    const title2 = document.createElement('div');
                    title2.className = 'text-xl font-bold glitch';
                    title2.style.color = color;
                    title2.textContent = altAd.title;
                    
                    const subtitle2 = document.createElement('div');
                    subtitle2.className = 'text-sm';
                    subtitle2.style.color = 'white';
                    subtitle2.textContent = altAd.subtitle;
                    
                    content2.appendChild(title2);
                    content2.appendChild(subtitle2);
                    billboard.appendChild(content2);
                    
                    buildingsContainer.appendChild(billboard);
                }
            }
            
            // Create spotlights
            if (config.neonEnabled) {
                const spotlightCount = Math.floor(width / 400) + 2;
                
                for (let i = 0; i < spotlightCount; i++) {
                    const spotlight = document.createElement('div');
                    spotlight.className = 'spotlight';
                    
                    const left = (width / spotlightCount) * i + Math.random() * 100 - 50;
                    const bottom = Math.random() * 100 + 200;
                    
                    spotlight.style.left = `${left}px`;
                    spotlight.style.bottom = `${bottom}px`;
                    spotlight.style.animationDelay = `${Math.random() * 5}s`;
                    
                    buildingsContainer.appendChild(spotlight);
                }
            }
        }
        
        // Create rain effect
        function createRain() {
            rainContainer.innerHTML = '';
            
            if (!config.rainEnabled) return;
            
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            // Create raindrops
            for (let i = 0; i < config.rainCount; i++) {
                const raindrop = document.createElement('div');
                raindrop.className = 'raindrop';
                
                const dropHeight = Math.random() * 20 + 10;
                const dropLeft = Math.random() * width;
                const dropDelay = Math.random() * 2;
                const dropDuration = Math.random() * 0.5 + 0.5;
                
                raindrop.style.height = `${dropHeight}px`;
                raindrop.style.left = `${dropLeft}px`;
                raindrop.style.animationDelay = `${dropDelay}s`;
                raindrop.style.animationDuration = `${dropDuration}s`;
                
                rainContainer.appendChild(raindrop);
            }
            
            // Create rain splashes
            for (let i = 0; i < config.splashCount; i++) {
                const splash = document.createElement('div');
                splash.className = 'splash';
                
                const splashLeft = Math.random() * width;
                const splashDelay = Math.random() * 2;
                const splashDuration = Math.random() * 0.3 + 0.2;
                
                splash.style.left = `${splashLeft}px`;
                splash.style.animationDelay = `${splashDelay}s`;
                splash.style.animationDuration = `${splashDuration}s`;
                
                rainContainer.appendChild(splash);
            }
        }
        
        // Create sidewalks
        function createSidewalks() {
            const width = window.innerWidth;
            
            // Left sidewalk
            const leftSidewalk = document.createElement('div');
            leftSidewalk.className = 'sidewalk-left';
            document.querySelector('.sidewalk').appendChild(leftSidewalk);
            
            // Right sidewalk
            const rightSidewalk = document.createElement('div');
            rightSidewalk.className = 'sidewalk-right';
            document.querySelector('.sidewalk').appendChild(rightSidewalk);
        }
        
        // Create people and robots
        function createPeople() {
            // Clear existing people
            document.querySelectorAll('.person').forEach(el => el.remove());
            
            if (!config.crowdEnabled) return;
            
            const width = window.innerWidth;
            
            for (let i = 0; i < config.personCount; i++) {
                const person = document.createElement('div');
                person.className = 'person';
                
                // Determine if it's a human, augmented human, or robot
                const type = Math.random();
                let personSvg;
                
                if (type < 0.3) {
                    // Regular human
                    personSvg = `
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="3" r="2.5" fill="#555555"/>
                            <rect x="3.5" y="5" width="3" height="8" fill="#555555"/>
                            <line x1="3.5" y1="13" x2="1" y2="18" stroke="#555555" stroke-width="1.5"/>
                            <line x1="6.5" y1="13" x2="9" y2="18" stroke="#555555" stroke-width="1.5"/>
                            <line x1="0.5" y1="9" x2="3.5" y2="9" stroke="#555555" stroke-width="1.5"/>
                            <line x1="6.5" y1="9" x2="9.5" y2="9" stroke="#555555" stroke-width="1.5"/>
                        </svg>
                    `;
                } else if (type < 0.7) {
                    // Augmented human
                    const augmentColor = neonColors[Math.floor(Math.random() * neonColors.length)];
                    personSvg = `
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="3" r="2.5" fill="#555555"/>
                            <rect x="3.5" y="5" width="3" height="8" fill="#555555"/>
                            <line x1="3.5" y1="13" x2="1" y2="18" stroke="#555555" stroke-width="1.5"/>
                            <line x1="6.5" y1="13" x2="9" y2="18" stroke="#555555" stroke-width="1.5"/>
                            <line x1="0.5" y1="9" x2="3.5" y2="9" stroke="#555555" stroke-width="1.5"/>
                            <line x1="6.5" y1="9" x2="9.5" y2="9" stroke="#555555" stroke-width="1.5"/>
                            <circle cx="7" cy="2.5" r="1" fill="${augmentColor}"/>
                            <rect x="6.5" y="6" width="1" height="3" fill="${augmentColor}"/>
                        </svg>
                    `;
                } else {
                    // Robot
                    const robotColor = neonColors[Math.floor(Math.random() * neonColors.length)];
                    personSvg = `
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="6" height="4" fill="#444444"/>
                            <rect x="2" y="7" width="8" height="6" fill="#444444"/>
                            <line x1="3" y1="13" x2="1" y2="18" stroke="#444444" stroke-width="1.5"/>
                            <line x1="9" y1="13" x2="11" y2="18" stroke="#444444" stroke-width="1.5"/>
                            <circle cx="4" cy="5" r="0.8" fill="${robotColor}"/>
                            <circle cx="8" cy="5" r="0.8" fill="${robotColor}"/>
                            <line x1="4" y1="9" x2="8" y2="9" stroke="#333333" stroke-width="0.8"/>
                            <line x1="4" y1="10.5" x2="8" y2="10.5" stroke="#333333" stroke-width="0.8"/>
                        </svg>
                    `;
                }
                
                person.innerHTML = personSvg;
                
                // Position on left or right sidewalk
                const side = Math.random() > 0.5;
                let left;
                
                if (side) {
                    // Left sidewalk
                    left = Math.random() * (width * 0.15);
                } else {
                    // Right sidewalk
                    left = width - (Math.random() * (width * 0.15));
                }
                
                const scale = Math.random() * 0.5 + 0.7;
                const zIndex = Math.floor(Math.random() * 2) + 7;
                
                person.style.left = `${left}px`;
                person.style.transform = `scale(${scale})`;
                person.style.zIndex = zIndex;
                
                scene.appendChild(person);
            }
        }
        
        // Create steam vents
        function createSteamVents() {
            // Clear existing steam vents
            document.querySelectorAll('.grate, .steam').forEach(el => el.remove());
            
            const width = window.innerWidth;
            
            for (let i = 0; i < config.steamCount; i++) {
                const grate = document.createElement('div');
                grate.className = 'grate';
                
                // Position on left or right sidewalk
                const side = Math.random() > 0.5;
                let left;
                
                if (side) {
                    // Left sidewalk
                    left = Math.random() * (width * 0.15);
                } else {
                    // Right sidewalk
                    left = width - (Math.random() * (width * 0.15));
                }
                
                grate.style.left = `${left}px`;
                
                scene.appendChild(grate);
                
                // Add steam particles
                for (let j = 0; j < 3; j++) {
                    const steam = document.createElement('div');
                    steam.className = 'steam';
                    
                    const steamHeight = Math.random() * 30 + 20;
                    const steamLeft = left + Math.random() * 10 - 5;
                    const steamDuration = Math.random() * 2 + 2;
                    const steamDelay = Math.random() * 3;
                    
                    steam.style.height = `${steamHeight}px`;
                    steam.style.left = `${steamLeft}px`;
                    steam.style.animationDuration = `${steamDuration}s`;
                    steam.style.animationDelay = `${steamDelay}s`;
                    
                    scene.appendChild(steam);
                }
            }
        }
        
        // Create flying vehicles
        function createVehicles() {
            // Clear existing vehicles
            document.querySelectorAll('.flying-vehicle').forEach(el => el.remove());
            
            if (!config.vehiclesEnabled) return;
            
            const height = window.innerHeight;
            
            for (let i = 0; i < config.vehicleCount; i++) {
                const vehicle = document.createElement('div');
                vehicle.className = 'flying-vehicle';
                
                const vehicleType = Math.random();
                let vehicleSvg;
                
                const color = neonColors[Math.floor(Math.random() * neonColors.length)];
                
                if (vehicleType < 0.4) {
                    // Car-like vehicle
                    vehicleSvg = `
                        <svg width="30" height="12" viewBox="0 0 30 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 6 L8 2 L22 2 L28 6 L28 8 L2 8 Z" fill="${color}" fill-opacity="0.7"/>
                            <rect x="4" y="4" width="4" height="2" fill="#ffffff" fill-opacity="0.9"/>
                            <circle cx="7" cy="8" r="2" fill="#333333"/>
                            <circle cx="23" cy="8" r="2" fill="#333333"/>
                            <rect x="10" y="3" width="10" height="3" fill="#ffffff" fill-opacity="0.3"/>
                        </svg>
                    `;
                } else if (vehicleType < 0.7) {
                    // Drone-like vehicle
                    vehicleSvg = `
                        <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="5" r="4" fill="${color}" fill-opacity="0.7"/>
                            <rect x="8" y="3" width="4" height="4" fill="#333333"/>
                            <line x1="2" y1="5" x2="6" y2="5" stroke="${color}" stroke-width="1"/>
                            <line x1="14" y1="5" x2="18" y2="5" stroke="${color}" stroke-width="1"/>
                            <circle cx="2" cy="5" r="1" fill="${color}" fill-opacity="0.7"/>
                            <circle cx="18" cy="5" r="1" fill="${color}" fill-opacity="0.7"/>
                        </svg>
                    `;
                } else if (vehicleType < 0.9) {
                    // Futuristic ship
                    vehicleSvg = `
                        <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8 L10 3 L30 3 L38 8 L30 13 L10 13 Z" fill="${color}" fill-opacity="0.7"/>
                            <rect x="12" y="5" width="16" height="5" fill="#ffffff" fill-opacity="0.3"/>
                            <circle cx="35" cy="8" r="2" fill="${color}" fill-opacity="0.9"/>
                        </svg>
                    `;
                } else {
                    // Police/security vehicle
                    vehicleSvg = `
                        <svg width="35" height="15" viewBox="0 0 35 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 8 L8 3 L27 3 L33 8 L27 13 L8 13 Z" fill="#222" fill-opacity="0.9"/>
                            <rect x="10" y="5" width="15" height="5" fill="#ffffff" fill-opacity="0.2"/>
                            <circle cx="5" cy="8" r="1.5" fill="red" fill-opacity="0.9">
                                <animate attributeName="opacity" values="0.9;0.3;0.9" dur="0.5s" repeatCount="indefinite" />
                            </circle>
                            <circle cx="30" cy="8" r="1.5" fill="blue" fill-opacity="0.9">
                                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="0.5s" repeatCount="indefinite" />
                            </circle>
                        </svg>
                    `;
                }
                
                vehicle.innerHTML = vehicleSvg;
                
                // Add light beam
                const light = document.createElement('div');
                light.className = 'vehicle-light';
                light.style.width = '20px';
                light.style.height = '3px';
                light.style.left = '-15px';
                light.style.top = '5px';
                
                vehicle.appendChild(light);
                
                const top = Math.random() * (height * 0.5) + 50;
                const speed = Math.random() * 15 + 10;
                const delay = Math.random() * 20;
                
                vehicle.style.top = `${top}px`;
                vehicle.style.animationDuration = `${speed}s`;
                vehicle.style.animationDelay = `-${delay}s`;
                
                scene.appendChild(vehicle);
            }
        }
        
        // Create urban decay elements
        function createDecay() {
            // Clear existing decay elements
            document.querySelectorAll('.decay').forEach(el => el.remove());
            
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            for (let i = 0; i < config.decayCount; i++) {
                const decay = document.createElement('div');
                decay.className = 'decay';
                
                const decayWidth = Math.random() * 30 + 10;
                const decayHeight = Math.random() * 20 + 5;
                
                // Position on buildings or sidewalks
                const posType = Math.random();
                let left, top;
                
                if (posType < 0.7) {
                    // On buildings
                    left = Math.random() * width;
                    top = Math.random() * (height * 0.5);
                } else {
                    // On sidewalks
                    const side = Math.random() > 0.5;
                    if (side) {
                        // Left sidewalk
                        left = Math.random() * (width * 0.15);
                    } else {
                        // Right sidewalk
                        left = width - (Math.random() * (width * 0.15));
                    }
                    top = height * 0.7 - Math.random() * 20;
                }
                
                decay.style.width = `${decayWidth}px`;
                decay.style.height = `${decayHeight}px`;
                decay.style.left = `${left}px`;
                decay.style.top = `${top}px`;
                
                scene.appendChild(decay);
            }
        }
        
        // Event listeners for controls
        toggleRainBtn.addEventListener('click', () => {
            config.rainEnabled = !config.rainEnabled;
            createRain();
        });
        
        toggleVehiclesBtn.addEventListener('click', () => {
            config.vehiclesEnabled = !config.vehiclesEnabled;
            createVehicles();
        });
        
        toggleNeonBtn.addEventListener('click', () => {
            config.neonEnabled = !config.neonEnabled;
            createBuildings();
        });
        
        toggleCrowdBtn.addEventListener('click', () => {
            config.crowdEnabled = !config.crowdEnabled;
            createPeople();
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            createStars();
            createBuildings();
            createRain();
            createSidewalks();
            createPeople();
            createSteamVents();
            createVehicles();
            createDecay();
        });
        
        // Initialize the scene when the page loads
        window.addEventListener('load', initScene);
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'95e1aa5812205840',t:'MTc1MjMzNTEwMi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>

![starspceafiş](https://github.com/user-attachments/assets/e2c5377e-8d8b-42c0-a3af-a436e74472dd)



![computer network and peripherals star technology logo colorful world with broken meteor rocks and planets in the middle of the colorful star inside the world (22)](https://github.com/user-attachments/assets/3d278891-70da-4818-ae3f-82c632fa8d32)


![a computer network and peripherals with a colorful world with a colorful triangle in the middle of the broken meteor rocks and planets, the star technology logo, people watching from the world in space seeing  (11)](https://github.com/user-attachments/assets/3ea6fdbd-706c-44a4-b71b-ccccf19a4126)

[![colorful star technology cloud sign with codes and digital computer  in the middle with colorful triangles in the comet wings with colorful luminous computer network with advanced software seen from space  (1)](https://github.com/user-attachments/assets/df235a7e-9d09-4b72-ab81-c14b68248509)](https://starcomputer.tr)

[![Starteknoloj ta (1)(https://github.com/user-attachments/assets/ef1c92c2-bc69-4b06-9d88-945df7794d3a)](https://github.com/user-attachments/assets/0983d2bb-60b6-4339-90f0-bd84254cbc18)](https://starteknoloji.tr)

<div style="position: relative; width: 100%; height: 0; padding-top: 56.2225%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAGmXxihZo8/z3BB4vbUOAbRkOb6y6QnwQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGmXxihZo8&#x2F;z3BB4vbUOAbRkOb6y6QnwQ&#x2F;view?utm_content=DAGmXxihZo8&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Star Teknoloji JavaScript Template</a> - Star Teknoloji 

- ***[Starcomputer.space](https://starcomputer.space)***

***[`(*```STAR``My```Tech`````*****````*****```*****`
***``é``**©**``*``**``***``****``*****``****``***``**``*``*©*``*``**``***``****``*****``****``***``**``*``**©**``é```***`***]***


***[***``(*```STAR``My```Tech`***
***`é``**©**``*``**``***``****``*****``****``***``**``*``*©*``*``**``***``****``*****``****``***``**``*``**©**``é``***]***



<div style="position: relative; width: 100%; height: 0; padding-top: 56.2225%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAGlnz87ebc/qX_nlL760ZEAoqGl4dFrng/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGlnz87ebc&#x2F;qX_nlL760ZEAoqGl4dFrng&#x2F;view?utm_content=DAGlnz87ebc&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Colorful Star Computer Logo Design</a> - Star Teknoloji
[![pages-build-deployment](https://github.com/Codes-Exe/JavaScript/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main)](https://github.com/Codes-Exe/JavaScript/actions/workflows/pages/pages-build-deployment)

<div style="position: relative; width: 100%; height: 0; padding-top: 56.2225%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAGlLmFAypc/dpH5RYWuqOCKyD40xWgVUg/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGlLmFAypc&#x2F;dpH5RYWuqOCKyD40xWgVUg&#x2F;view?utm_content=DAGlLmFAypc&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Siyah Beyaz Koyu Fütüristik Stilde Çok Yakında Web Sitesi Çok Yakında Web Sitesi Çok Yakında Sayfası</a> - Star Computer

# Create a JavaScript Action

Use this template to bootstrap the creation of a JavaScript action.:rocket:

This template includes tests, linting, a validation workflow, publishing, and versioning guidance.

If you are new, there's also a simpler introduction.  See the [Hello World JavaScript Action](https://github.com/actions/hello-world-javascript-action)

## Create an action from this template

Click the `Use this Template` and provide the new repo details for your action

## Code in Main

Install the dependencies

```bash
npm install
```

Run the tests :heavy_check_mark:

```bash
$ npm test

 PASS  ./index.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (95ms)
...
```

## Change action.yml

The action.yml defines the inputs and output for your action.

Update the action.yml with your name, description, inputs and outputs for your action.

See the [documentation](https://help.github.com/en/articles/metadata-syntax-for-github-actions)

## Change the Code

Most toolkit and CI/CD operations involve async operations so the action is run in an async function.

```javascript
const core = require('@actions/core');
...

async function run() {
  try {
      ...
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
```

See the [toolkit documentation](https://github.com/actions/toolkit/blob/master/README.md#packages) for the various packages.

## Package for distribution

GitHub Actions will run the entry point from the action.yml. Packaging assembles the code into one file that can be checked in to Git, enabling fast and reliable execution and preventing the need to check in node_modules.

Actions are run from GitHub repos.  Packaging the action will create a packaged action in the dist folder.

Run prepare

```bash
npm run prepare
```

Since the packaged index.js is run from the dist folder.

```bash
git add dist
```
## Create a release branch

Users shouldn't consume the action from master since that would be latest code and actions can break compatibility between major versions.

Checkin to the v1 release branch

```bash
git checkout -b v1
git commit -a -m "v1 release"
```

```bash
git push origin v1
```

Note: We recommend using the `--license` option for ncc, which will create a license file for all of the production node modules used in your project.

Your action is now published! 🧑‍💻:

## Proje
<p align="center" dir="auto">
  <a href="https://ogtal.com"><img src="https://github.com/user-attachments/assets/2f9107d2-447d-49b9-a2c0-859761c181be" secured-asset-link="" style="max-width: 100%;"></a>
 </p>

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1093867217?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="ogtal ‐ Clipchamp ile yapıldı (3)"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

## Study and Discussion

<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://starteknoloji-space.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

<script id="dsq-count-scr" src="//starteknoloji-space.disqus.com/count.js" async></script>

## Websites of our businesses used

Sitelerimizdeki uygulamalar ev ve işyerleri için özelleştirebilir, geliştirilebiliriz. Yorum, istek ve sorularınız için lütfen yazınız. 
NOT; Projelrimizi hazırlamamızda Lütfen katkıda bulunun.# Beğendiysen Reklam verebilirsiniz üçretsizdir. İletişim : ercetinguler@starteknloji.space e-posta gönderebilirisiniz.   
   

[<img style="display: block;-webkit-user-select: none;margin: auto;cursor: zoom-in;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="https://github.com/user-attachments/assets/7c8dc3e1-e2bd-4cfa-bae7-6ff304e09656" width="532" height="266">](https://starcomputer.space)

### [Star Computer Com.tr](https://starcomputer.com.tr)
<iframe src="https://starcomputer.com.tr" title="Planet" height="400" width="1000" style="border:10;"></iframe>
<iframe src="https://starteknoloji.github.io/ThemeBlue/" title="Planet" height="400" width="1000" style="border:10;"></iframe>
<div class="badge-base LI-profile-badge" data-locale="tr_TR" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="star-computer-96573a2a0" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://tr.linkedin.com/in/star-computer-96573a2a0?trk=profile-badge">Star Computer</a></div>



<script 
  src="https://www.paypal.com/sdk/js?client-id=BAAZLPCKnSb06zNs1aBikWVXyJHPiVZvA3ZLvqPo1rNpf92PSLL91IOPWDdhXBQNVW275Q8xspd4OB7Y-I&components=hosted-buttons&disable-funding=venmo&currency=USD">
</script>

<div id="paypal-container-X2N7ME57HB89S"></div>
<script>
  paypal.HostedButtons({
    hostedButtonId: "X2N7ME57HB89S",
  }).render("#paypal-container-X2N7ME57HB89S")
</script>

<script 
  src="https://www.paypal.com/sdk/js?client-id=BAASlR7ZOaZ3ZUlPcIpMBaMKS-8NYGnU0GDawmguI1KZAFbZszey9baVVAXKxR1cz4RWE6bnIcX-7Z_VLk&components=hosted-buttons&disable-funding=venmo&currency=USD">
</script>

<div id="paypal-container-BGWQVG5XXGACJ"></div>
<script>
  paypal.HostedButtons({
    hostedButtonId: "BGWQVG5XXGACJ",
  }).render("#paypal-container-BGWQVG5XXGACJ")
</script>

<script 
  src="https://www.paypal.com/sdk/js?client-id=BAAZLPCKnSb06zNs1aBikWVXyJHPiVZvA3ZLvqPo1rNpf92PSLL91IOPWDdhXBQNVW275Q8xspd4OB7Y-I&components=hosted-buttons&disable-funding=venmo&currency=USD">
</script>

<div id="paypal-container-ZHEH5QJBCN7A4"></div>
<script>
  paypal.HostedButtons({
    hostedButtonId: "ZHEH5QJBCN7A4",
  }).render("#paypal-container-ZHEH5QJBCN7A4")
</script>

### [My Computer Digital](https://mycomputer.digital)
<iframe src="https://mycomputer.digital" title="Planet" height="400" width="1000" style="border:10;"></iframe>

### [Satış Mağazası](https://starteknoloji.github.io/Starnet/)
<iframe src="https://starteknoloji.github.io/Starnet/" title="Planet" height="400" width="1000" style="border:10;"></iframe>

### [Proje YerliCins](https://yerlicins.com) 
<iframe src="https://yerlicins.com" title="Planet" height="400" width="1000" style="border:10;"></iframe>

<iframe src="https://github.com/sponsors/StarTeknoloji/card" title="Sponsor StarTeknoloji" height="200" width="1000" style="border: 10;"></iframe>
<iframe src="https://github.com/sponsors/Codes-Exe/card" title="Sponsor Codes-Exe" height="200" width="1000" style="border: 10;"></iframe>

## Contact
- `email: ercetinguler@starteknoloji.space`
- `Tel: +90 0288 318 3560`
- `Adrres: Devlet Mah. Kanal Cad:13 Türkiye/Kırklareli/Vize`
- `Author: Erçetin Güler`

See the [actions tab](https://github.com/actions/javascript-action/actions) for runs of this action! 🚀


<div style="text-align:center;padding:1em 0;"> <h2><a style="text-decoration:none;" href="https://www.zeitverschiebung.net/en/city/738154"><span style="color:gray;">Current local time in</span><br />Vize, Turkey</a></h2> <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=large&timezone=Europe%2FIstanbul" width="145%" height="120" frameborder="50" seamless></iframe> </div>


<script type='text/javascript'>
    var disqus_shortname = 'starteknoloji-space';
    // DON'T EDIT BELOW THIS LINE
    (function () {
        var loaded = false;
        function loadDisqus() {
            if (loaded) return;
            loaded = true;
            var div = document.getElementById('all-comments');
            div.innerHTML = ''; div.id = 'disqus_thread';

            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = 'https://' + disqus_shortname + '.disqus.com/embed.js';

            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);

        }

        if ( document.getElementById('all-comments') || document.readyState === "complete" ) {
            return setTimeout( loadDisqus, 1 );
        }

        if ( document.addEventListener ) {
            document.addEventListener( "DOMContentLoaded", loadDisqus, false );
            window.addEventListener( "load", loadDisqus, false );
        } else if ( document.attachEvent ) {
            document.attachEvent( "onreadystatechange", loadDisqus );
            window.attachEvent( "onload", loadDisqus);
        }
    }());
</script>


<div id="disqus_thread"></div>
<script>
    window.addEventListener('message', receiveMessage, false);
    function receiveMessage(event) {
        if (event.data) {
            var msg;
            try {
                msg = JSON.parse(event.data);
            } catch (err) {
                // Do nothing
            }
            if (!msg) {
                return false;
            }
            if (msg.name === 'resize' || msg.name === 'rendered') {
                window.parent.postMessage({
                sentinel: 'amp',
                type: 'embed-size',
                height: msg.data.height
                }, '*');
            }
        }
    }
</script>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
    */
    var disqus_config = function () {
        this.page.url = window.location;
        this.page.identifier = window.location.hash;
    };
    (function() {  // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');

        s.src = '//starteknoloji-space.disqus.com/embed.js';

        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
<script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
<amp-iframe
    width=1000 height=140
    src="https://example.com/amp#hash"
    layout="responsive"
    sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms"
    resizable
>
    <div
        aria-label="Load more"
        role=button
        tabindex=0
        overflow
        style="display:block;font-size:12px;font-weight:8000;font-family:Helvetica Neue, arial, sans-serif;text-align:center;line-height:1.1;padding:12px 16px;border-radius:4px;background:rgba(29,47,58,0.6);color:rgb(255,255,255)"
    >
        Load more
    </div>
</amp-iframe>
<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://starteknoloji-space.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

<script id="dsq-count-scr" src="//starteknoloji-space.disqus.com/count.js" async></script>
<div id="disqus_thread"></div>
<script>
    /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://starteknoloji-space.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

<script id="dsq-count-scr" src="//starteknoloji-space.disqus.com/count.js" async></script>



