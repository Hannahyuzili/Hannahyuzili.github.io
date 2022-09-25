window.onload = function () {
    const mianVideo = document.querySelector('.mianVideo');
    // Trigger data after loading
    mianVideo.addEventListener('loadedmetadata', () => {
        const body = document.body;
        const mianVideoPlaceAndSize = mianVideo.getBoundingClientRect();
        // get zIndex of mianVideo
        const mianVideoZIndex = getComputedStyle(mianVideo, null).zIndex;
        // Create a mask above the video
        const cloudVideoDiv = document.createElement('div');
        cloudVideoDiv.classList.add('cloudVideoDiv');
        cloudVideoDiv.style.width = mianVideoPlaceAndSize.width + 'px';
        cloudVideoDiv.style.height = mianVideoPlaceAndSize.height + 'px';
        cloudVideoDiv.style.top = mianVideo.offsetTop + 'px';
        cloudVideoDiv.style.left = mianVideo.offsetLeft + 'px';
        // Make the zIndex of the mask always larger than the video
        mianVideoZIndex == 'auto' ? cloudVideoDiv.style.zIndex = '1' : cloudVideoDiv.style.zIndex =
            parseInt(mianVideoZIndex) + 1;
        body.appendChild(cloudVideoDiv);
        // Create Control Panel
        const controlPanelDiv = document.createElement('div');
        controlPanelDiv.classList.add('controlPanelDiv');
        controlPanelDiv.style.width = mianVideoPlaceAndSize.width - 20 + 'px';
        cloudVideoDiv.appendChild(controlPanelDiv);
        // Display and hide of control panel
        cloudVideoDiv.addEventListener('mouseenter', () => controlPanelDiv.style.display = 'block');
        cloudVideoDiv.addEventListener('mouseleave', () => controlPanelDiv.style.display = 'none');
        // Create Progress Bar
        const progressBar = document.createElement('input');
        progressBar.setAttribute('type', 'range');
        progressBar.setAttribute('min', 0);
        progressBar.setAttribute('max', mianVideo.duration);
        progressBar.value = 0;
        progressBar.classList.add('progressBar');
        progressBar.style.width = mianVideoPlaceAndSize.width - 340 + 'px';
        progressBar.style.bottom = '5px';
        progressBar.style.left = '40px';
        controlPanelDiv.appendChild(progressBar);
        // Add an event to the progress bar
        progressBar.addEventListener('input', () => {
            mianVideo.currentTime = progressBar.value;
            mianVideo.play();
            cloudVideoDiv.style.backgroundColor = 'rgba(0, 0, 0, 0)';
            document.querySelector('.replay').style.display = 'none';
            document.querySelector('.loop').style.display = 'none';
        });
        // Add an event to a video
        mianVideo.addEventListener('timeupdate', () => {
            progressBar.value = mianVideo.currentTime;
            const currentNum = document.querySelector('.currentNum');
            currentNum.innerHTML = formatTime(mianVideo.currentTime);
        });
        // Create a number of presentation progress
        controlPanelDiv.insertAdjacentHTML('beforeend', `
            <div class="progressNum">
                <span class="currentNum">00:00</span> /
                <span>${formatTime(mianVideo.duration)}</span>
            </div>
            `);
        // Create full screen button
        controlPanelDiv.insertAdjacentHTML('beforeend', `
            <svg class="fullScreen" width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33 6H42V15" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M42 33V42H33" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 42H6V33" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 15V6H15" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`);
        const fullScreen = document.querySelector('.fullScreen');
        fullScreen.addEventListener('click', () => {
            // click full screen
            if (mianVideo.requestFullscreen) {
                mianVideo.requestFullscreen();
            } else if (mianVideo.webkitRequestFullscreen) {
                mianVideo.webkitRequestFullscreen();
            } else if (mianVideo.mozRequestFullScreen) {
                mianVideo.mozRequestFullScreen();
            } else if (mianVideo.msRequestFullscreen) {
                mianVideo.msRequestFullscreen();
            }
        })
        // creat sound button
        controlPanelDiv.insertAdjacentHTML('beforeend', `<div class="controlSound"></div>`);
        const controlSound = document.querySelector('.controlSound');
        const openSoundSvg = `<svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z" fill="none" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
                <path d="M32 15L32 15C32.6232 15.5565 33.1881 16.1797 33.6841 16.8588C35.1387 18.8504 36 21.3223 36 24C36 26.6545 35.1535 29.1067 33.7218 31.0893C33.2168 31.7885 32.6391 32.4293 32 33" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M34.2358 41.1857C40.0835 37.6953 43.9999 31.305 43.9999 24C43.9999 16.8085 40.2042 10.5035 34.507 6.97906" stroke="#000000" stroke-width="4" stroke-linecap="round"/>
            </svg>`;
        const closeSoundSvg =
            `<svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.7344 20.2858L32.2491 28.7711" stroke="#000000" stroke-width="4" stroke-linecap="square" stroke-linejoin="miter"/><path d="M32.25 20.2858L40.7353 28.7711" stroke="#000000" stroke-width="4" stroke-linecap="square" stroke-linejoin="miter"/><path d="M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z" fill="none" stroke="#000000" stroke-width="4" stroke-linejoin="miter"/></svg>`;
        controlSound.innerHTML = openSoundSvg;
        controlSound.addEventListener('click', () => {
            const val = controlSoundProgress.querySelector('input').value;
            if (val === '0') {
                controlSound.innerHTML = openSoundSvg;
                controlSoundProgress.querySelector('input').value = '100';
                mianVideo.volume = 1;
            } else {
                controlSound.innerHTML = closeSoundSvg;
                controlSoundProgress.querySelector('input').value = '0';
                mianVideo.volume = 0;
            }
            controlSoundProgressValue.innerHTML = controlSoundProgress.querySelector('input').value;
        });
        // creat sound control bar
        controlPanelDiv.insertAdjacentHTML('beforeend', `
            <div class="controlSoundProgress">
                <div class="controlSoundProgressValue">100</div>
                <input type="range" min="0" max="100" value="100">
            </div>`);
        // Display and hide of sound control bar
        const controlSoundProgress = document.querySelector('.controlSoundProgress');
        const controlSoundProgressValue = document.querySelector('.controlSoundProgressValue');
        controlSound.addEventListener('mouseenter', () => controlSoundProgress.style.display = 'block');
        controlSoundProgress.addEventListener('mouseleave', () => controlSoundProgress.style.display =
            'none');
        controlSoundProgress.addEventListener('input', () => {
            const val = controlSoundProgress.querySelector('input').value;
            val <= 0 ? controlSound.innerHTML = closeSoundSvg : controlSound.innerHTML =
                openSoundSvg;
            mianVideo.volume = val / 100;
            controlSoundProgressValue.innerHTML = `${val}`;
        });
        // creat play/pause button
        controlPanelDiv.insertAdjacentHTML('beforeend', `<div class="playAndPause"></div>`);
        const playAndPause = document.querySelector('.playAndPause');
        const playSvg =
            `<svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M16 12V36" stroke="#000000" stroke-width="4" stroke-linecap="square" stroke-linejoin="miter"/><path d="M32 12V36" stroke="#000000" stroke-width="4" stroke-linecap="square" stroke-linejoin="miter"/></svg>`;
        const pauseSvg =
            `<?xml version="1.0" encoding="UTF-8"?><svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M15 24V11.8756L25.5 17.9378L36 24L25.5 30.0622L15 36.1244V24Z" fill="#000000" stroke="#000000" stroke-width="4" stroke-linejoin="miter"/></svg>`;
        playAndPause.innerHTML = playSvg;
        playAndPause.addEventListener('click', () => {
            if (mianVideo.paused) {
                mianVideo.play();
                playAndPause.innerHTML = playSvg;
            } else {
                mianVideo.pause();
                playAndPause.innerHTML = pauseSvg;
            }
        });
        // creat multi speed button
        controlPanelDiv.insertAdjacentHTML('beforeend', `<div class="videoSpeed">SPEED</div>`);
        const videoSpeed = document.querySelector('.videoSpeed');
        controlPanelDiv.insertAdjacentHTML('beforeend', `
            <ul class="videoSpeedList">
                <li data-playbackRate="0.5">0.5×</li>
                <li data-playbackRate="0.75">0.75×</li>
                <li data-playbackRate="1" class="select">1×</li>
                <li data-playbackRate="1.25">1.25×</li>
                <li data-playbackRate="1.5">1.5×</li>
                <li data-playbackRate="2">2×</li>
                <li class="customizePlaybackRate">
                    <input type="number" min="0" max="15" placeholder="custom">
                </li>
            </ul>`);
        const videoSpeedList = document.querySelector('.videoSpeedList');
        const videoSpeedListLi = document.querySelectorAll('.videoSpeedList li[data-playbackRate]');
        const customizePlaybackRate = document.querySelector('.customizePlaybackRate');
        const customizePlaybackRateInput = document.querySelector('.customizePlaybackRate input');
        videoSpeed.addEventListener('mouseenter', () => videoSpeedList.style.display = 'block')
        videoSpeedList.addEventListener('mouseleave', () => videoSpeedList.style.display = 'none');
        videoSpeedListLi.forEach(item => {
            item.addEventListener('click', () => {
                videoSpeedListLi.forEach(item => item.classList.remove('select'));
                customizePlaybackRate.classList.remove('select')
                item.classList.add('select')
                mianVideo.playbackRate = item.getAttribute('data-playbackRate');
            });
        });
        customizePlaybackRateInput.addEventListener('input', () => {
            videoSpeedListLi.forEach(item => item.classList.remove('select'));
            customizePlaybackRate.classList.add('select')
            mianVideo.playbackRate = customizePlaybackRateInput.value;
            if (!customizePlaybackRateInput.value) mianVideo.playbackRate = 1;
        });
        // creat replay button
        const replaySvg =
            '<svg class="replay" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 24V18L26 21L31 24L26 27L21 30V24Z" fill="none" stroke="#ffffff" stroke-width="3" stroke-linejoin="round"/><path d="M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.6141 12.9301 6 17 6 17" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 9V17H14" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        // creat loop button
        const loopSvg =
            '<svg class="loop" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M4 25C4 18.3502 9.39624 13 16 13L44 13" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M38 7L44 13L38 19" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 23C44 29.6498 38.6038 35 32 35H4" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 41L4 35L10 29" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        mianVideo.addEventListener('ended', () => {
            cloudVideoDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            if (document.querySelector('.replay')) {
                document.querySelector('.replay').style.display = 'block';
                document.querySelector('.loop').style.display = 'block';
            } else {
                cloudVideoDiv.insertAdjacentHTML('beforeend', replaySvg);
                cloudVideoDiv.insertAdjacentHTML('beforeend', loopSvg);
            }
            const replay = document.querySelector('.replay');
            const loop = document.querySelector('.loop');
            function endedClick() {
                mianVideo.currentTime = 0;
                mianVideo.play();
                cloudVideoDiv.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                replay.style.display = 'none';
                loop.style.display = 'none';
            }
            replay.addEventListener('click', endedClick);
            loop.addEventListener('click', () => {
                mianVideo.loop = true;
                endedClick();
            });
        });
   
    });
    // Format Time
    function formatTime(t) {
        let m = parseInt(t % 3600 / 60);
        m = m < 10 ? '0' + m : m;
        let s = parseInt(t % 60);
        s = s < 10 ? '0' + s : s;
        return m + ':' + s;
    }
}
 