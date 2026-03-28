:root { --p: #7C3AED; --g: #10B981; --r: #EF4444; --bg: #F8FAFC; }
body { margin: 0; font-family: 'Inter', sans-serif; background: #222; display: flex; justify-content: center; }

.page { width: 100vw; max-width: 450px; height: 100vh; background: var(--bg); display: none; position: relative; overflow: hidden; }
.page.active { display: flex; flex-direction: column; }

/* Logo Styles */
.main-logo { width: 120px; height: 120px; border-radius: 50%; margin-bottom: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
.small-logo { width: 80px; height: 80px; border-radius: 50%; margin-bottom: 5px; border: 2px solid var(--p); object-fit: cover; }
.nav-logo { width: 45px; height: 45px; border-radius: 50%; margin-right: 12px; }
.profile-avatar { width: 100px; height: 100px; border-radius: 50%; border: 4px solid var(--p); margin-bottom: 15px; }

.tab-content { display: none; width: 100%; height: 100%; }
.tab-content.active { display: block; }
.scroll-area { flex: 1; overflow-y: auto; padding: 20px 20px 100px; }

/* Card Fixes */
.card { 
    background: white; 
    padding: 2.5rem 2rem; 
    border-radius: 24px; 
    margin: 40px auto; 
    width: 85%; 
    text-align: center; 
    box-shadow: 0 10px 20px rgba(0,0,0,0.05); 
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

.dash-header { display: flex; align-items: center; margin-bottom: 20px; }
.sos-btn { width: 90px; height: 90px; background: var(--r); border: 8px solid #FEE2E2; border-radius: 50%; color: white; font-weight: 900; animation: pulse 2s infinite; cursor: pointer; }
@keyframes pulse { 0% { transform: scale(0.95); } 70% { transform: scale(1); } 100% { transform: scale(0.95); } }

.info-card { background: white; padding: 15px; border-radius: 16px; margin-top: 15px; text-align: left; border: 1px solid #F1F5F9; }
.trip-item { background: white; padding: 15px; border-radius: 12px; margin-bottom: 12px; border-left: 4px solid var(--p); }

.bottom-nav { position: absolute; bottom: 0; width: 100%; height: 75px; background: white; border-top: 1px solid #E2E8F0; display: flex; }
.nav-item { flex: 1; border: none; background: none; color: #94A3B8; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; }
.nav-item.active { color: var(--p); font-weight: bold; }

.modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; z-index: 1000; }
.modal-box { background: white; padding: 20px; border-radius: 24px; width: 85%; max-width: 400px; display: flex; flex-direction: column; gap: 10px; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }

/* Form Elements */
input, select, textarea { padding: 12px; border-radius: 10px; border: 1px solid #eee; width: 100%; box-sizing: border-box; }
.btn-back { position: absolute; top: 20px; left: 20px; background: #f1f5f9; border: none; color: #64748b; width: 35px; height: 35px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; }

.hidden { display: none !important; }
.btn-primary { background: var(--p); color: white; border: none; padding: 14px; border-radius: 12px; font-weight: 600; width: 100%; cursor: pointer; }
.btn-success { background: var(--g); color: white; border: none; padding: 14px; border-radius: 12px; font-weight: 600; width: 100%; cursor: pointer; }
.btn-logout { background: #FEE2E2; color: var(--r); border: none; padding: 12px; border-radius: 12px; width: 100%; cursor: pointer; }
.timer-container { font-size: 0.8rem; color: #9CA3AF; margin-top: 10px; }
.btn-link { background: none; border: none; color: var(--p); text-decoration: underline; cursor: pointer; }
