import { Component, OnInit, Input } from '@angular/core';
import { WlMedia } from '../defines';
import { PeerService } from '../service/peer.service';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss'],
})
export class VideoplayerComponent implements OnInit {
  @Input() stream: WlMedia;
  @Input() toolbar = true;

  constructor(
    public peer: PeerService,
  ) { }

  ngOnInit() {}

  click(ev: Event) {
    console.log('click video');
    ev.preventDefault();

    this.stream.toggleSide = !this.stream.toggleSide;
  }
}